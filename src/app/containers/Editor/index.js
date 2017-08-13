import React from 'react'
import Codemirror from 'react-codemirror'
import { connect } from 'react-redux'
import { compileInput } from '../../actions/editor'
import 'codemirror/mode/coffeescript/coffeescript'

import './styles.css'

class Editor extends React.Component {
  get options () {
    return {
      lineNumbers: true,
      mode: 'coffeescript'
    }
  }

  get defaultValue () {
    return '# CoffeeScript goes here...'
  }

  constructor (props) {
    super(props)

    this.state = {
      value: this.defaultValue
    }

    this.handleFocusChange = this.handleFocusChange.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  updateValue (newValue) {
    this.setState({
      value: newValue
    })
  }

  handleInputChange (input) {
    this.updateValue(input)
    this.props.dispatch(compileInput(input))
  }

  handleFocusChange (focused) {
    if (focused && this.state.value === this.defaultValue) {
      this.updateValue('')
    }

    if (!focused && this.state.value === '') {
      this.updateValue(this.defaultValue)
    }
  }

  render () {
    return (
      <div className='Editor'>
        <Codemirror options={this.options} onChange={this.handleInputChange} onFocusChange={this.handleFocusChange} value={this.state.value} />
      </div>
    )
  }
}

export default connect()(Editor)
