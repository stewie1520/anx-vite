import ProductAllPage from './pages/All/All';

export default [
    {
        path: '/products',
        exact: true,
        layout: {
            header: true,
            footer: false,
        },
        page: ProductAllPage,
    },
];
