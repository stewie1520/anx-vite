import { useSelector } from 'react-redux';
import { useDarkMode } from './useDarkMode';

import { selectTheme } from '@/store/slices/layoutSlice';

export const useDarkModeProps = (props) => {
  const theme = useSelector(selectTheme);
  const [darkModeEnabled] = useDarkMode();

  if (theme === null) {
    if (darkModeEnabled) return props;
    return {};
  }

  if (theme === 'dark') return props;

  return {};
};

