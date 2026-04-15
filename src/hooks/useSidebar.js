import { useState, useCallback } from 'react';

export function useSidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activePanel, setActivePanel] = useState(null);

  const open = useCallback(() => setIsOpen(true), []);

  const close = useCallback(() => {
    setIsOpen(false);
    setActivePanel(null);
  }, []);

  const selectPanel = useCallback((panelId) => {
    setActivePanel(panelId);
    setIsOpen(true);
  }, []);

  return { isOpen, activePanel, open, close, selectPanel };
}
