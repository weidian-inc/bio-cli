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

require('hot-update-package')({
    packageName,
    cacheFolder: path.join(cacheFolder, 'bio-core-update-package-cache'),
    targetFolder: targetFolder,
    callback() {
        require(`${path.join(targetFolder, 'node_modules', packageName)}/bin/cmd`)(commander);
    }
});
