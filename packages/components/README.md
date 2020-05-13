Demo UI Toolkit components

## Installation

```js
npm install @demo-ui-toolkit/components
```

also, you need to install the peer dependency of @material-ui/core, 
check the version in the info message you get

## Documentation

Live on Github Pages
[storybook](https://dan-vidoni.github.io/ui-toolkit/)

Run locally
```js
npm run storybook
```

## Usage

```js
import React from 'react';
import ReactDOM from 'react-dom';
import Label from '@demo-ui-toolkit/components/lib/Label';

function App() {
  return (
    <>
        <Label>Hello</Label>
    </>
  );
}

ReactDOM.render(<App />, document.querySelector('#app'));
```






