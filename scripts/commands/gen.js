const inquirer = require('inquirer');
const { getFeatureNames } = require('../utils/getFeatureNames');
const { _generateFeature } = require('../internals/_generateFeature');
// const { _generatePages } = require('../internals/_generatePages');
const { _generateRoute } = require('../internals/_generateRoute');

const generateFeature = async () => {
  /**
   * @example
   * parsePagesString('all detail create') // return ['all', 'detail', 'create']
   * @param {string} pagesString
   * @returns {string[]}
   */
  const parsePagesString = (pagesString) => {
    pagesString = pagesString.trim();
    return pagesString.split(/\s/).filter(Boolean).map(page => page.toLowerCase());
  };

  try {
    const answer = await inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'feature\'s name',
        validate: (name) => {
          if (!name) return 'feature\'s name is required';
          const existedFeatures = getFeatureNames();
          name = name.toLowerCase();

          if (existedFeatures.includes(name)) {
            return `feature ${name} already existed`;
          }
          return true;
        },
      },
      {
        type: 'input',
        name: 'pagesString',
        message: 'feature\'s pages',
        suffix: ' (pages in lowercase and separated by a space)',
        validate: (pagesString = '') => {
          const pages = parsePagesString(pagesString);
          if (!pages.length) return 'required at least 1 page';

          return true;
        },
      },
    ]);

    const { name, pagesString } = answer;
    const pages = parsePagesString(pagesString);
    await _generateFeature(name);
    // await _generatePages(name, pages);
    await _generateRoute(name, pages);
  } catch (err) {
    console.log(err.message);
  }
};



const generate = (program, template) => {
  switch (template) {
    case 'feature':
      generateFeature(program);
      break;
    default:
      throw new Error(`template ${template} is not supported`);
  }
};

/**
 *
 * @param {import('commander').Command} program
 */
module.exports = (program) => {
  program.command('gen')
    .alias('g')
    .argument('<template>', 'template of application to generate')
    .action((template) => generate(program, template));
};
