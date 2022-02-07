import { lazy } from 'react';

import store from '@/store';
import { name, reducer, saga } from '@/features/dashboard/redux';

export default [
    {
        path: '/overview',
        exact: true,
        layout: {
            header: true,
            footer: false,
            sidebar: true,
        },
        page: lazy(() => import('./pages/All/index').then(module => {
            store.injectReducer(name, reducer);
            store.injectSaga(name, saga);
            return module;
        })),
    },
];
