#!/usr/bin/env node

/**
 * @file
 * @desc bio client
 * @author liuyuanyangscript@gmail.com
 * @date  2017/08/11
 */

const fs = require('fs');
const path = require('path');
const fse = require('fs-extra');
const commander = require('commander');

const cacheFolder = path.join(process.env.HOME, '.bio');

const packageName = 'bio-core';
const targetFolder = path.join(cacheFolder, 'bio-cmd');

require(`${path.join(__dirname, '../../bio-core')}/bin/cmd`)(commander);
