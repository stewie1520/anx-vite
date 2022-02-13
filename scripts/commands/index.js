const fs = require('fs');
const path = require('path');

const currentFilename = path.basename(__filename);
const commandFilenames = fs.readdirSync(__dirname).filter(filename => filename !== currentFilename);

/**
 *
 * @param {import('commander').Command} program
 */
const commandLoader = (program) => {
  for (const filename of commandFilenames) {
    require(path.join(__dirname, filename))(program);
  }
};

module.exports = commandLoader;
