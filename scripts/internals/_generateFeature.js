const mkdirp = require('mkdirp');
const path = require('path');
const { FEATURES_DIR } = require('../utils/paths');

const _generateFeature = async (featureName) => {
  const pathFeature = path.join(FEATURES_DIR, featureName);
  const pathApi = path.join(FEATURES_DIR, featureName, 'api');
  const pathComponent = path.join(FEATURES_DIR, featureName, 'components');
  const pathPages = path.join(FEATURES_DIR, featureName, 'pages');
  const pathRedux = path.join(FEATURES_DIR, featureName, 'redux');

  await mkdirp(pathFeature)
    .then(() => Promise.all([
      mkdirp(pathApi),
      mkdirp(pathComponent),
      mkdirp(pathPages),
      mkdirp(pathRedux),
    ]));
};

module.exports = { _generateFeature };
