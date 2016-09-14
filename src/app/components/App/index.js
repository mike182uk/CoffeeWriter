import React from 'react'
import { connect } from 'react-redux'
import Editor from '../../containers/Editor'
import Error from '../error'
import Output from '../Output'

import './styles.css'

const App = ({ output, error }) => {
  return (
    <div className="App">
      <Editor />
      <Output>{output}</Output>
      <Error>{error}</Error>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    output: state.app.output,
    error: state.app.error
  }
}

export default connect(mapStateToProps)(App)
