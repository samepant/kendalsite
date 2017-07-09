import React from 'react'
import contentfulClient from './utilities/contentful'
import './pdfs.css'

export default class extends React.Component {
  constructor () {
    super()

    this.state = {
      entries: []
    }
  }
  componentWillMount () {
    contentfulClient.getEntries({
      content_type: 'pdf'
    })
      .then(res => {
        this.setState({entries: res.items})
      })
      .catch(console.error)
  }
  render () {
    return (
      <div className='pdfs'>
        <ul className='pdf-wrapper'>
          {this.state.entries.map(el => (
            <li key={el.sys.id} className='pdf'>
              <a href={el.fields.pdf.fields.file.url}>
                <img alt='' src={el.fields.pdfPreviewImage.fields.file.url} />
              </a>
              <label>{el.fields.pdfName}</label>
            </li>))}
        </ul>
      </div>
    )
  }
}