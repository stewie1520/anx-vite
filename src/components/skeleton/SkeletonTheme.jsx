import { SkeletonTheme as OriginSkeletonTheme } from 'react-loading-skeleton';

import { useDarkModeProps } from '@/hooks';

// eslint-disable-next-line react/prop-types
export const SkeletonTheme = ({ children, ...props }) => {
  const colorProps = useDarkModeProps({
    baseColor: '#15202B',
    highlightColor: '#15202B',
  });

  return (
    <OriginSkeletonTheme {...colorProps} {...props}>
      {children}
    </OriginSkeletonTheme>
  );
};


