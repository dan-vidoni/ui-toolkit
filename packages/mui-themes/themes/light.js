var tokens = require('@demo-ui-toolkit/design-tokens/dist/tokens.common.js');

module.exports = {
    "typography": {
        "fontFamily": tokens['fontFamily']
    },
    "palette": {
        "type": "light",
        "primary": {
            "main": tokens['colorLightPrimaryMain'],
            "light": tokens['colorLightPrimaryLight'],
            "dark": tokens['colorLightPrimaryDark']
        },
        "text": {
            "primary": "rgba(0, 0, 0, 0.87)",
            "secondary": "rgba(0, 0, 0, 0.54)"
        },
        "background": {
            "paper": "#fff",
            "default": "#fafafa"
        }
    }
}