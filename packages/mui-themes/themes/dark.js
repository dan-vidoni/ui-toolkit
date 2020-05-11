var tokens = require('@demo-ui-toolkit/design-tokens/dist/tokens.common.js');

module.exports = {
    "typography": {
        "fontFamily": tokens['fontFamily']
    },
    "palette": {
        "type": "dark",
        "primary": {
            "main": tokens['colorDarkPrimaryMain'],
            "light": tokens['colorDarkPrimaryLight'],
            "dark": tokens['colorDarkPrimaryDark']
        },
        "text": {
            "primary": "#fff",
            "secondary": "gba(255, 255, 255, 0.7)"
        },
        "background": {
            "paper": "#424242",
            "default": "#303030"
        }
    },
}
