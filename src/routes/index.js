import DashboardRoute from '@/features/dashboard/route';

// common pages
import { NotFoundPage } from '@/pages';

export default [
  ...DashboardRoute,
  {
    path: '/',
    exact: true,
    redirect: '/overview',
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
