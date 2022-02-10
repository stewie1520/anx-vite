import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { selectCollapse, selectTransitioning } from '@/store/slices/layoutSlice';

export const useHiddenAfterSidebarTransitionEnd = () => {
  const collapse = useSelector(selectCollapse);
  const isTransitioning = useSelector(selectTransitioning);
  const [isHidden, setIsHidden] = useState(collapse && !isTransitioning);

  useEffect(() => {
    setIsHidden(collapse && !isTransitioning);
  }, [collapse, isTransitioning]);

  return isHidden;
};
