# react-videojs-fancybox

> React wrapper for [VideoJS](https://videojs.com/) inside [Fancybox](https://fancyapps.com/fancybox/3/)

[![NPM](https://img.shields.io/npm/v/react-videojs-fancybox.svg)](https://www.npmjs.com/package/react-videojs-fancybox) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Alternative
This package is using `VideoJS` library combined with `jQuery` and `fancybox` library (`jQuery-based`), if you looking for `react-based` modal for VideoJS use [react-modal-videojs](https://www.npmjs.com/package/react-modal-videojs) instead.

## Demo
Check the [demo](https://waskito.github.io/react-videojs-fancybox/)

## Install

```bash
npm install --save react-videojs-fancybox
```

## Usage

```jsx
import React, { Component } from 'react'

import FancyVideo from 'react-videojs-fancybox';

export default class App extends Component {
  render () {
    return (
      <div className='container'>
        <FancyVideo
          source="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4"
          poster="https://raw.githubusercontent.com/waskito/react-modal-videojs/master/example/public/preview.png"
          id={"sintel"}
         />
      </div>
    )
  }
}

```

## License

MIT © [waskito](https://github.com/waskito)
