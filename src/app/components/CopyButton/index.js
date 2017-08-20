import React, { Component } from 'react'
import CopyToClipboard from 'react-copy-to-clipboard'

import './styles.css'

export default class CopyButton extends Component {
  get defaultButtonText () {
    return 'Copy'
  }

  constructor (props) {
    super(props)

    this.handleOnCopy = this.handleOnCopy.bind(this)

    this.state = {
      buttonText: this.defaultButtonText
    }
  }

  handleOnCopy (e) {
    clearInterval(this.buttonTextTimeout)

    this.setState({
      buttonText: 'Copied!'
    })

    this.buttonTextTimeout = setTimeout(() => {
      this.setState({
        buttonText: this.defaultButtonText
      })
    }, 1000)
  }

  render () {
    return (
      <CopyToClipboard text={this.props.value} onCopy={this.handleOnCopy}>
        <button className='CopyButton'>{this.state.buttonText}</button>
      </CopyToClipboard>
    )
  }
}
