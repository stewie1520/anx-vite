const { program } = require('commander');

require('./commands')(program);
program.parse();
