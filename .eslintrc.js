module.exports = {
    "extends": [
        "eslint:recommended", 
        "google"
    ],
    "parser": "babel-eslint",
    "plugins": [],
    "env": {
        "node": true,
        "browser": true,
        "commonjs": true,
        "es6": true
    },
    "rules": {
        "dot-notation": "error",
        "no-debugger": "off",
        "max-len": "off",
        "no-set-state": "off",
        "require-jsdoc": "off",
        "indent": [
            "error",
            4
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ]
    }
};