#! /usr/bin/env node
'use strict';

require('booljs-globals');

var program = require('commander');
program.version('0.0.1');

program
    .command('create <namespace> [dir]')
    .description('Creates a new bool.js project')
    .option('-d, --database_driver <driver>', 'Which database driver to use')
    .option('-s, --server_driver <driver>', 'Which server driver to use')
    .action(require('./lib/create'));

program.parse(process.argv);
