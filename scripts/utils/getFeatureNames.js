const { FEATURES_DIR } = require('./paths');
const fs = require('fs');

const getFeatureNames = () => {
  return fs.readdirSync(FEATURES_DIR);
};

module.exports = { getFeatureNames };
