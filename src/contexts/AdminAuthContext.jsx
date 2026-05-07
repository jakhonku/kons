import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { supabase } from '../lib/supabase';

const AdminAuthContext = createContext(null);

export function AdminAuthProvider({ children }) {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    supabase.auth.getSession().then(({ data }) => {
      if (!mounted) return;
      setSession(data.session ?? null);
      setLoading(false);
    });

    const { data: sub } = supabase.auth.onAuthStateChange((_event, newSession) => {
      setSession(newSession ?? null);
      setLoading(false);
    });

    return () => {
      mounted = false;
      sub?.subscription?.unsubscribe();
    };
  }, []);

  const login = useCallback(async ({ email, password }) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: (email ?? '').trim(),
      password: password ?? '',
    });
    if (error) {
      return { ok: false, error: translateAuthError(error.message) };
    }
    setSession(data.session);
    return { ok: true };
  }, []);

  const logout = useCallback(async () => {
    await supabase.auth.signOut();
    setSession(null);
  }, []);

  const value = {
    isAuthenticated: !!session,
    user: session?.user ?? null,
    email: session?.user?.email ?? null,
    loading,
    login,
    logout,
  };

  return (
    <AdminAuthContext.Provider value={value}>
      {children}
    </AdminAuthContext.Provider>
  );
}

export function useAdminAuth() {
  const ctx = useContext(AdminAuthContext);
  if (!ctx) throw new Error('useAdminAuth must be inside AdminAuthProvider');
  return ctx;
}

function translateAuthError(message) {
  const m = (message || '').toLowerCase();
  if (m.includes('invalid login credentials')) return 'Email yoki parol notoʻgʻri';
  if (m.includes('email not confirmed')) return 'Email tasdiqlanmagan. Supabase Dashboard orqali tasdiqlang';
  if (m.includes('too many requests') || m.includes('rate limit')) return 'Juda koʻp urinish. Bir oz kuting va qaytadan urinib koʻring';
  if (m.includes('network')) return 'Tarmoq xatosi. Internet aloqasini tekshiring';
  return message || 'Tizimga kirib boʻlmadi';
}
