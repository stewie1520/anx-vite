import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { usePreferDarkMode } from './usePreferDarkMode';
import { useSafeLocalStorage } from './useSafeLocalStorage';

import { setTheme } from '@/store/slices/layoutSlice';

export const useDarkMode = () => {
  const prefersDarkMode = usePreferDarkMode();
  const [isEnabled, setIsEnabled] = useSafeLocalStorage('dark-mode', undefined);
  const dispatch = useDispatch();

  const enabled = isEnabled === undefined ? prefersDarkMode : isEnabled;

  useEffect(() => {
    if (window === undefined) return;
    const root = window.document.documentElement;
    root.classList.remove(enabled ? 'light' : 'dark');
    const newTheme = enabled ? 'dark' : 'light';
    root.classList.add(newTheme);
    dispatch(setTheme(newTheme));
  }, [enabled]);

  return [enabled, setIsEnabled];
};
