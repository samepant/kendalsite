import React from 'react';

import './hoverPictures.css';

class HoverPictures extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      randomMultiplier: Math.random(),
      imageLocation: props.imageLocation
    }

    this.showPics = this.showPics.bind(this);
    this.hidePics = this.hidePics.bind(this);
    this.trackMouse = this.trackMouse.bind(this);
  }
  componentDidMount () {
    const hoverHolder = document.getElementById('hover'+ this.props.projectId);
    const parent = hoverHolder.parentElement;

    parent.addEventListener('mouseenter', this.showPics);
    parent.addEventListener('mouseleave', this.hidePics);
  }

  componentWillUnmount () {
    const hoverHolder = document.getElementById('hover'+ this.props.projectId);
    const parent = hoverHolder.parentElement;

    parent.removeEventListener('mouseenter', this.showPics);
    parent.removeEventListener('mouseleave', this.hidePics);
  }

  showPics (event) {
    const hoverHolder = event.target.querySelector('#hover'+ this.props.projectId);
    
    event.target.addEventListener('mousemove', (event) => {
      this.trackMouse(event, hoverHolder);
    });
    hoverHolder.setAttribute('style', 'display: block');
  }

  hidePics (event) {
    const hoverHolder = event.target.querySelector('#hover'+ this.props.projectId);
    
    hoverHolder.setAttribute('style', 'display: none');
    event.target.removeEventListener('mousemove', (event) => {
      this.trackMouse(event, hoverHolder);
    });
  }

  trackMouse (event, imgParent) {
    const images = imgParent.childNodes;
    const cursorMargin = 30;

    images.forEach( (image, index) => {
      const imageHeight = image.offsetHeight;
      const imageWidth = image.offsetWidth;
      
      let newX = null;
      let newY = null;
      let imageRotation = null;

      newX = event.clientX - imageWidth - cursorMargin;
      newY = event.clientY + cursorMargin;
      imageRotation = -60 * this.state.randomMultiplier;
      
      image.setAttribute('style', `left: ${newX + 'px'}; top: ${newY + 'px'}; transform: rotateZ(${imageRotation + 'deg'})`);
    })
  }

  render () {
    return (
      <div id={'hover' + this.props.projectId} className="hover-pic">
        <img className="pic" alt={this.props.projectId + ' 1st hover pic'} src={this.props.sourceURL} />
      </div>
    )
  }
}


  //this component really doesn't work very well on touch devices, 
  //so im going to disable it on them for now, by wrapping the hover
  //pictures in a wrapper that checks to see if it's a touch device
class HoverPicturesWrapper extends React.Component {
  constructor() {
    super();

    this.shouldNotRender = this.shouldNotRender.bind(this);
  }

  shouldNotRender () {
    if (('ontouchstart' in window) || window.DocumentTouch) {
      return true;
    } else {
      return false;
    }
  }

  render () {
    if (this.shouldNotRender()) {
      console.log('touch device');
      return (
        <span />
      )
    } else {
      return (
        <HoverPictures projectId={this.props.projectId} sourceURL={this.props.sourceURL} imageLocation={this.props.imageLocation} />
      )
    }
  }
}

export default HoverPicturesWrapper;