const lodash = require('lodash');
const fs = require('fs/promises');
const path = require('path');
const { FEATURES_DIR } = require('../utils/paths');

const stringRoute = (featureName, page) => {
  const pageRoute = `  {
    path: '/${featureName}/${page}',
    exact: true,
    layout: {
        header: true,
        footer: false,
        sidebar: true,
    },
    page: lazy(() => import('./pages/${lodash.capitalize(page)}/index').then(module => {
        store.injectReducer(name, reducer);
        store.injectSaga(name, saga);
        return module;
    })),
  }`;

  return pageRoute;
};

const _generateRoute = async (featureName, pages) => {
  const pathFeature = path.join(FEATURES_DIR, featureName);
  const pathRoute = path.join(pathFeature, 'route.js');

  await fs.writeFile(pathRoute, `
import { lazy } from 'react';

import store from '@/store';
import { name, reducer, saga } from '@/features/${featureName}/redux';

export default [
${pages.map(page => stringRoute(featureName, page)).join(',\n')},
];
`);
};

module.exports = { _generateRoute };
