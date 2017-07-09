import React from 'react'
import contentfulClient from './utilities/contentful'
import './links.css'

export default class extends React.Component {
  constructor () {
    super()

    this.state = {
      entries: []
    }
  }
  componentWillMount () {
    contentfulClient.getEntries({
      content_type: 'links'
    })
      .then(res => {
        this.setState({entries: res.items})
      })
      .catch(console.error)
  }
  render () {
    return (
      <div className='links'>
        <ul>
          {this.state.entries.map(el => (<li key={el.sys.id}><a href={el.fields.link}>{el.fields.linktitle}</a></li>))}
        </ul>
      </div>
    )
  }
}