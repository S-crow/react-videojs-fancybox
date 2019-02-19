import React, { Component } from 'react'

import FancyVideo from 'react-videojs-fancybox';

export default class App extends Component {
  render () {
    return (
      <div className='container'>
        <FancyVideo
          source="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4"
          poster="https://raw.githubusercontent.com/waskito/react-modal-videojs/master/example/public/preview.png"
          id="sintel"
         />
      </div>
    )
  }
}
