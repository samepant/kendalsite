import React from 'react'
import contentfulClient from './utilities/contentful'
import './images.css'

export default class extends React.Component {
  constructor () {
    super()

    this.state = {
      entries: []
    }
  }
  componentWillMount () {
    contentfulClient.getEntries({
      content_type: 'images'
    })
      .then(res => {
        this.setState({entries: res.items})
      })
      .catch(console.error)
  }

  componentDidMount () {
    //setup mouse image stuff
    const mouse = {x:0,y:0}
    const offset = {x:10, y:10}
    const popover = document.getElementById('popover')
    document.addEventListener('mousemove', function(e){
        mouse.x = e.pageX
        mouse.y = e.pageY
        popover.style.left = (mouse.x + offset.x) + 'px'
        popover.style.top = (mouse.y + offset.y) + 'px'
    })

    const images = document.getElementsByClassName('image')
    Array.from(images).forEach(el => {
      console.log(el)
      el.addEventListener('mouseenter', () => {
        console.log(this)
      })
    })
  }

  componentWillUnMount () {
    document.removeEventListener('mousemove', function(e){})
  }

  render () {
    return (
      <div className='images'>
        <ul className='image-wrapper'>
          {this.state.entries.map(el => (<li key={el.sys.id}><img className='image' alt='' src={el.fields.image.fields.file.url} /></li>))}
        </ul>
        <div id='popover'> </div>
      </div>
    )
  }
}