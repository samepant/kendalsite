import React from 'react'
import contentfulClient from './utilities/contentful'
import './images.css'
import HoverPictures from './utilities/hoverPictures'

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

  render () {
    return (
      <div className='images'>
        <ul className='image-wrapper'>
          {this.state.entries.map(el => (<li key={el.sys.id}><img className='image' alt='' src={el.fields.image.fields.file.url} /><HoverPictures projectId={el.sys.id} sourceURL={el.fields.image.fields.file.url} imageLocation="top" /></li>))}
        </ul>
        <div id='popover'> </div>
      </div>
    )
  }
}