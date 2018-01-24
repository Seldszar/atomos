#!/usr/bin/env node

const meow = require('meow');
const atomos = require('../lib');

const cli = meow(`
  Usage
    $ atomos [path]

  Examples
    $ atomos
    $ atomos /path/to/clean
`);

const rootPath = cli.input[0] || process.cwd();
const options = cli.flags;

atomos(rootPath, options);
