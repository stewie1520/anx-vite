const echo = (input) => {
  console.log(input);
};

/**
 *
 * @param {import('commander').Command} program
 */
module.exports = (program) => {
  program.command('echo')
    .argument('<input>', 'input to displayed')
    .action(echo);
};
