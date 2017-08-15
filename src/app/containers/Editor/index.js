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
      mode: 'coffeescript',
      theme: this.props.theme
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
    if (focused && this.props.children === this.defaultValue) {
      this.props.dispatch(compileInput('', this.props.coffeeScriptVersion))
    }

    if (!focused && this.props.children === '') {
    this.props.dispatch(compileInput(this.defaultValue, this.props.coffeeScriptVersion))
    }
  }

  componentDidMount () {
    this.props.dispatch(compileInput(this.props.children, this.props.coffeeScriptVersion))
  }

  componentDidUpdate (prevProps) {
    if (this.props.coffeeScriptVersion !== prevProps.coffeeScriptVersion) {
      this.props.dispatch(compileInput(this.props.children, this.props.coffeeScriptVersion))
    }
  }

  render () {
    return (
      <div className='Editor'>
        <Codemirror
          options={this.options}
          onChange={this.handleInputChange}
          onFocusChange={this.handleFocusChange}
          value={this.props.children}
        />
      </div>
    )
  }
}

export default connect()(Editor)
