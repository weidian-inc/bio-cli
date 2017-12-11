# bio

![Mac Available](https://img.shields.io/badge/Mac-available-brightgreen.svg) ![Windows Unavailable](https://img.shields.io/badge/Windows-unavailable-red.svg) [![Node version](https://img.shields.io/badge/node-%3E%3D%208.9.1-brightgreen.svg)](http://nodejs.org/) [![Npm Version](https://img.shields.io/badge/npm-%3E%3D%205.5.1-brightgreen.svg)](https://www.npmjs.com/)

## bio 是什么

前端开发一站式解决方案。

使用 bio，您将只需关注业务逻辑，无需关注脚手架、mock 等配置信息，即可快速完成前端开发。

## 代码结构

bio-cli 为 bio 的命令行客户端部分，负责检查核心模块更新等工作。

bio-core 为 bio 核心功能模块，详情：https://github.com/weidian-inc/bio-core

## 安装

+   安装 Node.js（>= 8.9.1）

    https://nodejs.org/en/download/

+   安装 bio

    ```
    npm install bio-cli -g
    ```

+   npm 加速

    因为使用过程中需要通过 npm 安装一些依赖，为提高速度：

    如果你是中国用户，建议切换 npm 源为 https://registry.npm.taobao.org: 
    
    `npm config set registry https://registry.npm.taobao.org`
    
## 快速使用

+   第 1 步：创建目录

    `mkdir demo`

    `cd demo`
    
+   第 2 步：初始化各类项目
    
    +   vue 项目: `bio init vue` 或 `bio init bio-scaffold-vue`
    +   react 项目: `bio init react` 或 `bio-scaffold-react`
    +   pure（非 vue 或 react） 项目: `bio init pure` 或 `bio init bio-scaffold-pure`

+   第 3 步：安装项目依赖

    ```
    npm install
    ```
    
+   第 4 步：调试
    
    ```
    bio run dev-daily
    ```

## 命令集

+   项目初始化: `bio init <脚手架在 npm 源上的名称 或 在 bio 中的昵称>`

    +   作用
        +   告诉 bio 当前项目在使用哪个脚手架（存储于文件 `.biorc`）。
        +   如果当前目录是空目录（或只有 `README.md`），该命令会为目录拉取 demo 文件。
        
    +   昵称
    
        bio 已经为三种脚手架取了昵称:
        
        +   `bio-scaffold-vue`: `vue`
        +   `bio-scaffold-react`: `react`
        +   `bio-scaffold-pure`: `pure`
        
        详细信息可查看：[目前可用的脚手架](./docs/cn/目前bio可用的脚手架.md)。

+   启动脚手架任务: `bio run <脚手架支持的任务> [--no-watch]`

    +   作用

        +   只要是脚手架支持的任务，都可以用该命令启动（[目前可用的脚手架](./docs/cn/目前bio可用的脚手架.md)、[开发bio脚手架](./docs/cn/开发bio脚手架.md)）。
        +   **提示：**bio 默认会**启动**一个文件监听服务，同步当前目录文件到脚手架目录，保证脚手架目录与业务目录始终是父子关系（[为什么要保证父子关系?](https://github.com/hoperyy/deep-webpack/issues/8)），供脚手架编译。

    +   参数
        +   `-n, --no-watch`：**关闭**同步当前目录到脚手架目录的文件监听服务

    +   举例
        +   启动任务 `dev-daily`，并监听文件变化同步到脚手架目录：`bio run dev-daily`
        +   启动任务 `build-daily`，不监听文件变化同步到脚手架目录：`bio run build-daily -n`

+   脚手架相关

    +   显示本地安装的脚手架：`bio scaffold show <脚手架在 npm 源上的名称 或 在 bio 中的昵称>`
    +   创建脚手架 demo：`bio scaffold create`
    
+   mock：`bio mock [端口]`，默认端口是 7000

+   lint：`bio lint [--fix]`

    `--fix` 参数会自动修正源码中的代码格式。

+   help：`bio help`

## 特点

+   屏蔽器

    bio 屏蔽了各类脚手架，留给开发者纯粹的业务代码，帮助开发者快速开发各类项目。
    
+   连接器

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

        bio 提供了 lint 服务，默认使用基于 [airbnb 规范](https://github.com/airbnb/javascript) 的 [bio eslint 规范](./docs/cn/bio-eslint规范.md)，您可在项目目录重写 eslint 配置文件覆盖默认规则。

    +   mock

        bio 提供了简单的本地 mock 服务。

    +   更多

        基于原有版本，您可开发更多强大的功能。
    
## 链接

+   [目前可用的脚手架](./docs/cn/目前bio可用的脚手架.md)
+   [开发 bio 脚手架](./docs/cn/开发bio脚手架.md)

## LICENSE

BSD License

Copyright (C) 2017, [weidian.com](https://www.weidian.com/)

All rights reserved.
