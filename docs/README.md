# bio-cli

![Mac Available](https://img.shields.io/badge/Mac-available-brightgreen.svg) ![Windows Unavailable](https://img.shields.io/badge/Windows-unavailable-red.svg) [![Node version](https://img.shields.io/badge/node-%3E%3D%208.9.1-brightgreen.svg)](http://nodejs.org/) [![Npm Version](https://img.shields.io/badge/npm-%3E%3D%205.5.1-brightgreen.svg)](https://www.npmjs.com/)

github: [https://github.com/weidian-inc/bio-cli](https://github.com/weidian-inc/bio-cli)

npm: [https://www.npmjs.com/package/bio-cli](https://www.npmjs.com/package/bio-cli)

**Attention: Mac only for now**

## What is bio-cli ?

bio is a command cli tool for:

+   creating project demo files
+   compiling project without configuring
+   stylelint / eslint
+   local mock
+   ...

![bio 使用前后](https://user-images.githubusercontent.com/5757051/39090832-85175356-461b-11e8-9cd7-7a739165c18f.png)

## Installation

+   Node.js（>= 8.9.1）

    https://nodejs.org/en/download/

+   bio-cli

    ```
    [sudo] npm install bio-cli -g
    ```

## Quick Start

1. make a blank directory `demo`

    ```
    mkdir demo

    cd demo
    ```
    
2. init project of different types

    +   `bio init vue`: init `vue` project
    +   `bio init react`: init `react` project
    +   `bio init pure`: init project of other types
    
3. run task `dev-daily`
    
    ```
    bio run dev-daily
    ```

## TODO

+   add unitests
+   CI
+   complex demos
+   website built by vuepress

## Contributors

+   Core：[hoperyy](https://github.com/hoperyy)
+   Lint：[IOriens](https://github.com/IOriens)

## LICENSE

MIT
