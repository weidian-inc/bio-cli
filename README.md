# bio

![Mac Available](https://img.shields.io/badge/Mac-available-brightgreen.svg) ![Windows Unavailable](https://img.shields.io/badge/Windows-unavailable-red.svg) [![Node version](https://img.shields.io/badge/node-%3E%3D%208.9.1-brightgreen.svg)](http://nodejs.org/) [![Npm Version](https://img.shields.io/badge/npm-%3E%3D%205.5.1-brightgreen.svg)](https://www.npmjs.com/)

## bio 是什么

前端开发一站式解决方案。

使用 bio，您将只需关注业务逻辑，无需关注脚手架、mock 等配置信息，即可快速完成前端开发。

## 安装

+   安装 Node.js（>= 8.9.1）

    https://nodejs.org/en/download/

+   安装 bio

    ```
    npm install bio-cli -g
    ```
    
## 快速使用

+   第 1 步：创建项目目录

    ```
    mkdir demo

    cd demo
    ```
    
+   第 2 步：初始化各类项目
    +   `bio init bio-scaffold-vue`：  初始化 vue 项目
    +   `bio init bio-scaffold-react`：初始化 react 项目
    +   `bio init bio-scaffold-pure`：  初始化 非 vue / 非 react 项目

+   第 3 步：安装项目依赖

    ```
    npm install
    ```
    
+   第 4 步：调试
    
    ```
    bio run dev-daily
    ```

## 命令集

+   `bio init <脚手架在 npm 源上的名称>`

    +   功能

        初始化项目目录。

        该命令会完成以下动作：

        1. 在本地安装脚手架，以确保脚手架存在
        2. 如果当前目录是空目录（或只有 `README.md`），该命令会为生成 demo 文件。

    +   脚手架
    
        bio 目前准备了三个脚手架（`bio-scaffold-vue`、`bio-scaffold-react`、`bio-scaffold-pure`）

        详细信息可查看：[目前可用的脚手架](./docs/cn/目前bio可用的脚手架.md)。

+   `bio run <脚手架支持的任务> [-n, --no-watch]`

    +   功能

        启动脚手架任务。

        bio 会启动脚手架，并透传任务名称到脚手架，以完成各类任务。

        所以，任务名称是可变的，只要脚手架支持就可以。

        我们默认提供的三个脚手架都提供了以下 6 种任务：
        
        ```
        dev-daily、dev-pre、dev-prod、build-daily、build-pre、build-prod
        ```

        举例：初始化完 `bio-scaffold-vue` 项目后，启动它的 `dev-daily` 任务，命令即为：

        ```
        bio run dev-daily
        ```

    +   选项 `-n, --no-watch` 介绍：

        bio 默认会 **启动** 一个文件监听服务，同步当前目录文件到脚手架目录，保证脚手架目录与业务目录始终是父子关系，供脚手架编译。（资料：（[为什么要保证父子关系?](https://github.com/hoperyy/deep-webpack/issues/8)））

        `-n, --no-watch` 会**关闭**同步当前目录到脚手架目录的文件监听服务。

        举例：

        ```
        bio run dev-daily -n
        ```

+   `bio scaffold show <脚手架在 npm 源上的名称>`

    打开脚手架所在的本地目录

+   `bio scaffold create`

    创建脚手架，会提示你新的脚手架名称
    
+   `bio mock [端口]`

    启动本地 mock 服务，默认端口是 7000

    如果希望指定端口号，可以直接指定，如：`bio mock 8000`

+   `bio lint init [-t, --type [value]]`

    +   功能

        初始化 lint，会自动在 git commit 前挂载 lint 执行钩子

    +   选项 `[-t, --type [value]]` 介绍

        默认初始化 es6 规则，如果希望在某个目录初始化 es5 功能，可以进入该目录，执行：

        ```
        bio lint init -t es5
        ```

        目前支持两种类型：`es5、es6`

+   `bio lint [--fix] [-w, --watch]`

    执行 lint 检查，bio 会为你生成 lint 结果页面进行查看

    +   `--fix`：自动修正源码中的代码格式。
    +   `-w, --watch`：启动文件监听，文件一旦有变化，会触发 lint 检查

+   `bio help`

    help 信息

## 特点

+   屏蔽器

    bio 屏蔽了各类脚手架配置信息

    bio 可以启动任意数量、任意类型的脚手架来编译项目。
    
    已有的脚手架，稍加改造即可接入 bio（[脚手架如何对接 bio](./docs/cn/开发bio脚手架.md)）。

+   中心化管理脚手架

    当团队内部存在多种脚手架，技术割裂的现象会比较严重，难以统一。
    
    脚手架通过 bio 面向开发同学提供服务后，开发同学无需维护各种脚手架。

    脚手架中心化管理，能够解决脚手架技术栈更新慢、团队技术栈统一升级等问题，为团队协同提供更好保证。
    
+   热更新脚手架
    
    bio 运行前会检测接入的脚手架是否有更新，并会自动完成更新，保证使用者使用的脚手架版本一致。
    
+   命令行热更新

    bio 运行前会自动检查并安装命令行更新，无需手动更新。

    基于热更新机制，bio 有任何更新都会即时同步到使用者，使大家步调保持一致。

    修 bug、功能更新等就无需一个个通知使用者手动更新了。

+   灵活的业务开发

    接入 bio 的脚手架，可以通过读取业务目录的配置文件内容，实现脚手架的灵活功能。

    约定各类脚手架读取文件 `bio.config.js`（非强制，可自定义）来实现灵活性配置，比如修改 dist 目录、为 webpack 添加 loader 和 plugin 等，读取配置的功能由脚手架提供。

+   更多配套

    +   lint

        bio 提供了 lint 服务

    +   mock

        bio 提供了简单的本地 mock 服务。

    +   更多

        基于原有版本，您可开发更多强大的功能。
    
## 链接

+   [目前可用的脚手架](./docs/cn/目前bio可用的脚手架.md)
+   [开发 bio 脚手架](./docs/cn/开发bio脚手架.md)

## LICENSE

MIT
