const fs = require('fs');
const path = require('path');
const fse = require('fs-extra');
const OnBuildWebpack = require('on-build-webpack');

function moveDist() {
    const distDir = path.join(__dirname, 'dist');
    const targetDir = path.join(__dirname, '../../');

    const files = fs.readdirSync(distDir);
    
    files.forEach(filename => {
        const srcFile = path.join(distDir, filename);
        const targetFile = path.join(targetDir, filename);

        if (fs.existsSync(targetFile)) {
            fse.removeSync(targetFile);
        }

        fse.copySync(srcFile, targetFile);
    });
}

module.exports = {
    title: 'bio-cli',
    description: 'Just Do It',
    themeConfig: {
        nav: [
            { text: 'Quick Start', link: '/' },
            { text: 'All Orders', link: '/all-orders/' },
            { text: 'Dev Scaffold', link: '/dev-scaffold/' }
        ]
    },
    base: '/bio-cli/',
    configureWebpack: (config, isServer) => {
        // 修改客户端的 webpack 配置
        if (config.mode === 'production' && !isServer) {
            config.plugins.push(new OnBuildWebpack(() => {
                const timer = setTimeout(() => {
                    moveDist();
                    clearTimeout(timer);
                }, 5000);
            }));
        }
    }
}