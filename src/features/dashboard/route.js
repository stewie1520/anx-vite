import DashboardPage from './pages/All/index';

export default [
    {
        path: '/overview',
        exact: true,
        layout: {
            header: true,
            footer: false,
        },
        page: DashboardPage,
    },
];
