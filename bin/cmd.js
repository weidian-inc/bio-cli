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

const cacheDir = path.join(process.env.HOME, '.bio/bio-core-module');

require('ensure-module-latest')({
    moduleName: 'bio-core',
    cwd: cacheDir,
    registry: 'https://registry.npmjs.org/',
    beforeInstall(cwd) {
        if (fs.existsSync(cwd)) {
            try {
                fse.removeSync(cwd);
            } catch (err) {
                throw Error(err);
            }
        }
    },
}).then((modulePath) => {
    require(modulePath)(commander);
});
