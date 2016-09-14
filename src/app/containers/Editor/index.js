import React from 'react'
import Codemirror from 'react-codemirror'
import { connect } from 'react-redux'
import { compileInput } from '../../actions/editor'
import 'codemirror/mode/coffeescript/coffeescript'

import './styles.css'

const Editor = ({ dispatch }) => {
  let options = {
    lineNumbers: true,
    mode: 'coffeescript'
  }

  return (
    <div className="Editor">
      <Codemirror options={options} onChange={input => {
        dispatch(compileInput(input))
      }} value="# CoffeeScript goes here..." />
    </div>
  )
}

export default connect()(Editor)
