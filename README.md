# bio

![Mac Available](https://img.shields.io/badge/Mac-available-brightgreen.svg) ![Windows Unavailable](https://img.shields.io/badge/Windows-unavailable-red.svg) [![Node version](https://img.shields.io/badge/node-%3E%3D%208.9.1-brightgreen.svg)](http://nodejs.org/) [![Npm Version](https://img.shields.io/badge/npm-%3E%3D%205.5.1-brightgreen.svg)](https://www.npmjs.com/)

github: [https://github.com/weidian-inc/bio-cli](https://github.com/weidian-inc/bio-cli)

npm: [https://www.npmjs.com/package/bio-cli](https://www.npmjs.com/package/bio-cli)

**Mac only till now**

## What is bio ?

bio is a command cli tool for:

+   creating project demo files
+   compiling project without configuring
+   stylelint / eslint
+   local mock
+   ...

![bio 使用前后](https://user-images.githubusercontent.com/5757051/37277015-6eb4c890-261e-11e8-8c2b-500e6eff3295.png)

## Installation

+   Node.js（>= 8.9.1）

    https://nodejs.org/en/download/

+   bio

    ```
    [sudo] npm install bio-cli -g
    ```

## Fast use

1. make a blank directory `demo`

    ```
    mkdir demo

    cd demo
    ```
    
2. init project of different types

    +   `bio init bio-scaffold-vue`: init `vue` project
    +   `bio init bio-scaffold-react`: init `react` project
    +   `bio init bio-scaffold-pure`: init project of other types
    
3. run task `dev-daily`
    
    ```
    bio run dev-daily
    ```

## Orders

### `bio init <scaffoldName in npm registry | scaffold short name>`

+   description

    It will:
    
    +   init project files in current directory.
    +   run `npm install` automatically.

+   params
    +   `scaffoldName in npm registry`

        bio will search for scaffoldName from npm registry

    +   `scaffold short name`

        By default, bio provides shortName for scaffolds in npm as list:

        +   `vue` for `bio-scaffold-vue`
        +   `react` for `bio-scaffold-react`
        +   `pure` for `bio-scaffold-pure`

+   bio inside scaffold

    +   `bio-scaffold-vue`: for vue project
    +   `bio-scaffold-react`: for react project
    +   `bio-scaffold-pure`: for pure project

+   examples

    init a vue project: `bio init bio-scaffold-vue` or `bio init vue`

    init a react project: `bio init bio-scaffold-react` or `bio init react`

    init a pure project: `bio init bio-scaffold-pure` or `bio init pure`

### `bio run <taskName that scaffold supports> [-n, --no-watch]`

+   description

    It will run task that is only supported by scaffold, which was defined in `bio init <scaffoldName>`.

+   param
    +   `<taskName that scaffold supports>`

        By default, these tasks are supported in bio inside scaffolds as list:

        +   `dev-daily`: develop in daily envioronment.
        +   `dev-pre`: develop in re envioronment.
        +   `dev-prod`: develop in prod envioronment.
        +   `build-daily`: build in daily envioronment.
        +   `build-pre`: build in pre envioronment.
        +   `build-prod`: build in prod envioronment.

    +   `-n, --no-watch`

        `bio` will lanch a local server to watch file changes by default.

        `-n, --no-watch` will close this server.

    +   examples

        +   run task `dev-daily` and watch file changes: `bio run dev-daily`
        +   run task `dev-daily` and don't watch file changes: `bio run dev-daily -n`
        +   run task `build-daily` and don't watch file changes: `bio run build-daily -n`
    
### `bio mock [port]`

    `bio` will lanch a local mock server and create a test file named as `./mock/test.json`.

    `7000` is the default server port, and it can be changed by offering port.

    example:

    ```
    bio mock 8000
    ```

### `bio lint init [-t, --type [value]]`

    examples:

    +   init es6 rules: `bio lint init`
    +   init es5 rules: `bio lint init -t es5`

### `bio lint [--fix] [-w, --watch]`

    examples:

    +   auto fixing and only run once: `bio lint --fix`
    +   not auto fixing and only run once: `bio lint`
    +   auto fixing and watching file changes: `bio lint --fix -w`
    +   not auto fixing and watching file changes: `bio lint -w`

### `bio help`

It will show helps.

## TODO

+   add unitests
+   CI
+   complex demos

## Contributors

+   Core：[hoperyy](https://github.com/hoperyy)
+   Lint：[IOriens](https://github.com/IOriens)

## LICENSE

MIT
