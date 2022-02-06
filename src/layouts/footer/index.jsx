import { useSelector } from 'react-redux';

import { selectLayout } from '@/store/slices/layoutSlice';

const Footer = () => {
  const { footer } = useSelector(selectLayout);

  if (!footer) {
    return null;
  }

  return (
    <>
      <p>Footer</p>
    </>
  );
};

export default Footer;
