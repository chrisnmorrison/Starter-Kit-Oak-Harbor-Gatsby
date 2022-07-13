import React, { Component } from 'react'
import mediumZoom from 'medium-zoom'

const ImageZoom = props => {
const zoom = props.zoom.clone({
    background: props.color,
  })

  const attachZoom = image => {
    zoom.attach(image)
  }

  return <img src={props.src} alt={this.props.alt} ref={this.attachZoom} />
}

export default ImageZoom
