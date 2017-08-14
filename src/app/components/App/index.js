import React from 'react'
import { connect } from 'react-redux'
import Editor from '../../containers/Editor'
import Status from '../Status'
import Output from '../Output'
import Settings from '../../containers/Settings'

import './styles.css'

const App = ({ coffeeScriptVersion, output, status }) => {
  return (
    <div className='App'>
      <div className='App__Settings'>
        <Settings coffeeScriptVersion={coffeeScriptVersion} />
      </div>
      <div className='App__EditorOutput'>
        <Editor coffeeScriptVersion={coffeeScriptVersion} />
        <Output>{output}</Output>
      </div>
      <div className='App__Status'>
        <Status status={status} />
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    coffeeScriptVersion: state.app.coffeeScriptVersion,
    output: state.app.output,
    status: state.app.status
  }
}

export default connect(mapStateToProps)(App)
