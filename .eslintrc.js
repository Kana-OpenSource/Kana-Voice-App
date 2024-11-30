// https://docs.expo.dev/guides/using-eslint/
module.exports = {
    extends: [
        "expo",
        "eslint:recommended"
    ],
    ignorePatterns: ["/dist/*"],
    "rules": {
        "camelcase": [
            "warn",
            {
                "properties": "always"
            }
        ],
        "indent": [
            "error",
            4
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "no-unused-vars": [
            "error",
            {
                "argsIgnorePattern": "^_",
                "caughtErrorsIgnorePattern": "^_",
                "destructuredArrayIgnorePattern": "^_",
                "varsIgnorePattern": "^_"
            }
        ],
        "quotes": [
            "error",
            "double"
        ],
        "semi": [
            "error",
            "always"
        ]
    }
};
