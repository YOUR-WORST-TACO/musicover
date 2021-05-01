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
    "hooks": {}
}
