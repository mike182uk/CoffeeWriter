import React, { Component } from 'react'
import Codemirror from 'react-codemirror'
import CopyButton from '../../components/CopyButton'
import { connect } from 'react-redux'
import { compileInput } from '../../actions/editor'
import 'codemirror/mode/coffeescript/coffeescript'

import './styles.css'

class Editor extends Component {
  get options () {
    return {
      lineNumbers: true,
      mode: 'coffeescript',
      theme: this.props.editorTheme
    }
  }

  get defaultValue () {
    return '# CoffeeScript goes here...'
  }

  constructor (props) {
    super(props)

    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleFocusChange = this.handleFocusChange.bind(this)
  }

  handleInputChange (input) {
    this.props.dispatch(compileInput(input, this.props.coffeeScriptVersion))
  }

  handleFocusChange (focused) {
    if (focused && this.props.input === this.defaultValue) {
      this.props.dispatch(compileInput('', this.props.coffeeScriptVersion))
    }

    if (!focused && this.props.input === '') {
      this.props.dispatch(compileInput(this.defaultValue, this.props.coffeeScriptVersion))
    }
  }

  componentDidMount () {
    // re-compile input when the component is mounted
    this.props.dispatch(compileInput(this.props.input, this.props.coffeeScriptVersion))
  }

  componentDidUpdate (prevProps) {
    // re-compile input if the CoffeeScript version changed
    if (this.props.coffeeScriptVersion !== prevProps.coffeeScriptVersion) {
      this.props.dispatch(compileInput(this.props.input, this.props.coffeeScriptVersion))
    }
  }

  render () {
    return (
      <div className='Editor'>
        <Codemirror
          options={this.options}
          onChange={this.handleInputChange}
          onFocusChange={this.handleFocusChange}
          value={this.props.input}
        />
        <CopyButton value={this.props.input} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    coffeeScriptVersion: state.app.coffeeScriptVersion,
    editorTheme: state.app.editorTheme,
    input: state.app.input
  }
}

export default connect(mapStateToProps)(Editor)
