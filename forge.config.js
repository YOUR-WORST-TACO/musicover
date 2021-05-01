const fs = require('fs-extra');
const path = require('path');
const {spawn} = require('child_process');

module.exports = {
    "packagerConfig": {
        "asar": false,
        "asar.unpackDir": "test",
        "overwrite": true,
        "packageManager": "yarn"
    },
    "makers": [
        {
            "name": "@electron-forge/maker-squirrel",
            "config": {
                "name": "musicover"
            }
        },
        {
            "name": "@electron-forge/maker-zip",
            "platforms": [
                "darwin"
            ]
        },
        {
            "name": "@electron-forge/maker-deb",
            "config": {}
        },
        {
            "name": "@electron-forge/maker-rpm",
            "config": {}
        }
    ],
    "plugins": [
        [
            "@electron-forge/plugin-webpack",
            {
                "mainConfig": "./webpack.main.config.js",
                "renderer": {
                    "config": "./webpack.renderer.config.js",
                    "entryPoints": [
                        {
                            "html": "./src/index.html",
                            "js": "./src/renderer/index.tsx",
                            "name": "main_window"
                        }
                    ]
                }
            }
        ]
    ],
    hooks: {
        postPackage: async (forgeConfig, options) => {

            const modulesDir = path.join(options.outputPaths[0], '../../node_modules');
            const appPath = path.join(options.outputPaths[0], 'resources/app');
            console.log(modulesDir);
            console.log(appPath);
            return new Promise((resolve, reject) => {

                /*const npmInstall = spawn(/^win/.test(process.platform) ? 'npm.cmd' : 'npm', ['install'], {
                    cwd: myPath,
                });

                npmInstall.on('close', (code) => {
                    if (code === 0) {
                        resolve();
                    } else {
                        reject(new Error('process finished with error code ' + code));
                    }
                });

                npmInstall.on('error', (error) => {
                    reject(error);
                });*/
                try {
                    //fs.copySync(path.join(modulesDir, 'better-sqlite3'), path.join(appPath, 'node_modules', 'better-sqlite3'));
                    //fs.copySync(path.join(modulesDir, 'bindings'), path.join(appPath, 'node_modules', 'bindings'));
                    resolve()
                } catch (e) {
                    console.error(e.message);
                }
            });

        }
    }
}
