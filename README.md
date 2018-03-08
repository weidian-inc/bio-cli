# bio

![Mac Available](https://img.shields.io/badge/Mac-available-brightgreen.svg) ![Windows Unavailable](https://img.shields.io/badge/Windows-unavailable-red.svg) [![Node version](https://img.shields.io/badge/node-%3E%3D%208.9.1-brightgreen.svg)](http://nodejs.org/) [![Npm Version](https://img.shields.io/badge/npm-%3E%3D%205.5.1-brightgreen.svg)](https://www.npmjs.com/)

## bio 是什么

前端开发一站式解决方案。

使用 bio，您将只需关注业务逻辑，无需关注脚手架、mock 等配置信息，即可快速完成前端开发。

![bio 使用前后](https://user-images.githubusercontent.com/5757051/37135330-c5b6631e-22d7-11e8-9830-6987cb980014.png)

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
    
+   第 3 步：调试
    
    ```
    bio run dev-daily
    ```

## 命令集

+   `bio init <脚手架在 npm 源上的名称>`

    +   功能

        初始化项目目录。

        该命令会完成以下动作：

        +   在本地安装脚手架，以确保脚手架存在。**脚手架安装在 bio 缓存目录（`/Users/用户名/.bio/`）**
        +   如果当前目录是空目录（或只有 `README.md`），该命令会为生成 demo 文件。
        +   执行 `npm install`。

    +   脚手架
    
        bio 目前内置了三个脚手架（`bio-scaffold-vue`、`bio-scaffold-react`、`bio-scaffold-pure`）

        **bio 使用 npm 托管脚手架，默认托管在 npm 官方源，您可自行设置托管源，[代码地址](https://github.com/weidian-inc/bio-core/blob/master/bin/cmd.js#L50)**

    +   脚手架昵称

        bio 为内置的三个脚手架都取了昵称：

        ```
        bio-scaffold-vue --> vue
        bio-scaffold-react --> react
        bio-scaffold-pure --> pure
        ```

        **所以所有涉及脚手架名称的命令，均可以用昵称代替。**

        您也可以自行添加昵称，[代码地址](https://github.com/weidian-inc/bio-core/blob/master/bin/cmd.js#L52~L67)

+   `bio run <脚手架支持的任务> [-n, --no-watch]`

    +   功能

        启动脚手架任务。

        bio 会启动脚手架，并透传任务名称到脚手架，以完成各类任务。

        所以，任务名称是可变的，只要脚手架支持就可以。

        我们默认提供的三个脚手架都提供了以下 6 种任务：
        
        ```
        dev-daily
        dev-pre
        dev-prod
        build-daily
        build-pre
        build-prod
        ```

        详细信息可查看：[bio 内置脚手架任务名称](./docs/cn/目前bio可用的脚手架.md)。

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

    打开脚手架所在的本地目录。

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

## bio 的特点

![](https://user-images.githubusercontent.com/5757051/37135599-e5dc2c2c-22d8-11e8-8953-8ef2a2441bc7.png)

![](https://user-images.githubusercontent.com/5757051/37135550-abf1fd0c-22d8-11e8-8c2e-218be599a33d.png)
    
## 链接

+   [目前可用的脚手架](./docs/cn/目前bio可用的脚手架.md)
+   [开发 bio 脚手架](./docs/cn/开发bio脚手架.md)

## TODO

+   完善单元测试
+   持续集成
+   English Docs
+   完善脚手架项目 demo

## 开发者

+   Core：[刘远洋](https://github.com/hoperyy)
+   Lint：[丁俊杰](https://github.com/IOriens)

## LICENSE

MIT
