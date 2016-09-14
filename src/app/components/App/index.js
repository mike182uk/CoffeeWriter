import React from 'react'
import { connect } from 'react-redux'
import Editor from '../../containers/Editor'
import Status from '../status'
import Output from '../Output'

import './styles.css'

const App = ({ output, status }) => {
  return (
    <div className="App">
      <Editor />
      <Output>{output}</Output>
      <Status status={status} />
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    output: state.app.output,
    status: state.app.status
  }
}

export default connect(mapStateToProps)(App)
