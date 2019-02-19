# react-videojs-fancybox

> VideoJS in FancyBox

[![NPM](https://img.shields.io/npm/v/react-videojs-fancybox.svg)](https://www.npmjs.com/package/react-videojs-fancybox) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

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
