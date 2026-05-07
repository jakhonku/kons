import { useCallback, useEffect, useState } from 'react';
import { supabase, uploadImage } from '../lib/supabase';

function useTable(table, orderConfig = { column: 'created_at', ascending: false }) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const refresh = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      let query = supabase.from(table).select('*').order(orderConfig.column, { ascending: orderConfig.ascending });
      if (orderConfig.secondary) {
        query = query.order(orderConfig.secondary.column, { ascending: orderConfig.secondary.ascending });
      }
      const { data, error: err } = await query;
      if (err) {
        setError(err.message);
        setItems([]);
      } else {
        setItems(data ?? []);
      }
    } catch (e) {
      setError(e?.message || String(e));
      setItems([]);
    } finally {
      setLoading(false);
    }
  }, [table, orderConfig.column, orderConfig.ascending, orderConfig.secondary?.column, orderConfig.secondary?.ascending]);

  useEffect(() => {
    refresh();

    const channel = supabase
      .channel(`realtime-${table}`)
      .on('postgres_changes', { event: '*', schema: 'public', table }, () => {
        refresh();
      })
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [table, refresh]);

  const add = useCallback(async (payload) => {
    try {
      const { data, error: err } = await supabase
        .from(table)
        .insert(payload)
        .select()
        .single();
      if (err) return { ok: false, error: err.message };
      return { ok: true, data };
    } catch (e) {
      return { ok: false, error: e?.message || String(e) };
    }
  }, [table]);

  const update = useCallback(async (id, patch) => {
    try {
      const { data, error: err } = await supabase
        .from(table)
        .update(patch)
        .eq('id', id)
        .select()
        .single();
      if (err) return { ok: false, error: err.message };
      return { ok: true, data };
    } catch (e) {
      return { ok: false, error: e?.message || String(e) };
    }
  }, [table]);

  const remove = useCallback(async (id) => {
    try {
      const { error: err } = await supabase.from(table).delete().eq('id', id);
      if (err) return { ok: false, error: err.message };
      return { ok: true };
    } catch (e) {
      return { ok: false, error: e?.message || String(e) };
    }
  }, [table]);

  return { items, loading, error, add, update, remove, refresh };
}

const TICKER_ORDER = {
  column: 'sort_order',
  ascending: true,
  secondary: { column: 'created_at', ascending: false },
};

export function useAdminNews() {
  return useTable('news');
}

export function useAdminPosters() {
  return useTable('posters');
}

export function useAdminTicker() {
  return useTable('ticker_news', TICKER_ORDER);
}

export function useAdminTelegram() {
  return useTable('telegram_posts', TICKER_ORDER);
}

export { uploadImage };
