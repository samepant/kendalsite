import React from 'react'
import './email.css'

export default class extends React.Component {
  render () {
    return (
      <a className="mail-link" href="mailto:kendalkulley@gmail.com">
        <svg className="mail" viewBox="582 211 208 150" >
          <polygon id="body" points="583.5 360.364 789.182 360.364 789.182 211.5 583.5 211.5"></polygon>
          <polygon id="bottomflap" points="789.1818 360.5 686.3408 265.045 583.4998 360.5"></polygon>
          <polygon id="inside" points="583.5 211.5 686.341 306.955 789.182 211.5"></polygon>
          <polygon id="topflap" points="583.5 211.5 686.341 306.955 789.182 211.5"></polygon>
        </svg>
        <label>kendalkulley@gmail.com</label>
      </a>
    )
  }
}