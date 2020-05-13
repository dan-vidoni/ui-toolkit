## Material-ui Themes
Apply a consistent tone to your app.

Customize all design aspects of your project in order to meet the specific needs of your business.

## Installation

```js
npm install @demo-ui-toolkit/mui-themes
```

also, you need to install the peer dependency of @material-ui/core, 
check the version in the info message you get

## Usage

```js
import { lightTheme } from '@demo-ui-toolkit/mui-themes'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'

const theme = createMuiTheme(lightTheme)

<ThemeProvider theme={theme}>
  <App />
</ThemeProvider>
```