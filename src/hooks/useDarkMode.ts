import { useState, useEffect, useCallback } from 'react';

const STORAGE_KEY = '@todo/theme';

export function useDarkMode() {
  // Determine initial dark mode state
  const getInitial = () => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'light' || stored === 'dark') {
      return stored === 'dark';
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  };

  const [isDarkMode, setIsDarkMode] = useState<boolean>(getInitial);

  // Apply theme class and persist setting
  useEffect(() => {
    const theme = isDarkMode ? 'dark' : 'light';
    document.documentElement.classList.toggle('dark', isDarkMode);
    localStorage.setItem(STORAGE_KEY, theme);
  }, [isDarkMode]);

  // Toggle function
  const toggleDarkMode = useCallback(() => {
    setIsDarkMode(prev => !prev);
  }, []);

  return { isDarkMode, toggleDarkMode };
}
