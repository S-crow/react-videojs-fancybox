import React, { Component } from 'react';
import PropTypes from 'prop-types';
import videojs from 'video.js';
const $ = require('jquery');
window.jQuery = $;
require('fancybox/dist/js/jquery.fancybox.js');
require('fancybox/dist/css/jquery.fancybox.css');
require('video.js/dist/video-js.css');


import styles from './styles.css'

export default class FancyVideo extends Component {
  static propTypes = {
    id: PropTypes.string,
    poster: PropTypes.string,
    source: PropTypes.string
  }

  componentDidMount(){
    const {
      id,
      poster,
      source
    } = this.props;

    $(`#${id}`).fancybox({
      content: `<video id="video-${id}" preload width="100%" height="100%" controls="controls" autoplay="autoplay" class="video-js vjs-default-skin"><source src="${source}" type="video/mp4" /><div>Your browser does not support the HTML5 video tag.</div></video>`,
      afterShow: function() {
        videojs(`#video-${id}`, {
          responsive: true,
          fill: true,
          fluid: true,
          bigPlayButton: false
        }, function(){
        });
      },
      beforeClose: function() {
        videojs(`#video-${id}`).dispose();
      },
      fitToView : false,
      autoSize: false,
      width: '96%',
      height: '72%',
      maxWidth: '966',
      maxHeight: '540',
      padding: 4,
      openEffect:'fade',
      openSpeed: 'slow'
    });
  }

  render() {
    const {
      id,
      poster,
      source
    } = this.props

    return (
      <div className={styles.container}>
        <a id={id}>
          <img src={poster} className={styles.poster} />
          <span className={styles.playButton}></span>
        </a>
        <style global="true" jsx="true">{
          `
           video {
            width: 100%;
           }
           .fancybox-inner{
            background-color: #000000;
           }
           .fancybox-inner .video-js{
            height: 100% !important;
            width: 100% !important;
            padding-top: 0 !important;
           }
          `
        }</style>
      </div>
    )
  }
}
