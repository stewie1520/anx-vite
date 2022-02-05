import ProductsRoute from '@/features/products/route';

// common pages
import NotFoundPage from '@/pages/NotFound';

export default [
  ...ProductsRoute,
  {
    path: '/',
    exact: true,
    redirect: '/products',
  },
  {
    path: '/*',
    layout: {
      header: false,
      footer: false,
    },
    page: NotFoundPage,
  },
];
