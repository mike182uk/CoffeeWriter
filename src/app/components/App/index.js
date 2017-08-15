import React from 'react'
import { connect } from 'react-redux'
import Editor from '../../containers/Editor'
import Status from '../Status'
import Output from '../Output'
import Settings from '../../containers/Settings'

import './styles.css'

const App = ({ coffeeScriptVersion, editorTheme, outputTheme, output, status }) => {
  return (
    <div className='App'>
      <div className='App__Settings'>
        <Settings
          coffeeScriptVersion={coffeeScriptVersion}
          editorTheme={editorTheme}
          outputTheme={outputTheme}
        />
      </div>
      <div className='App__EditorOutput'>
        <Editor coffeeScriptVersion={coffeeScriptVersion} theme={editorTheme} />
        <Output theme={outputTheme}>{output}</Output>
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
    editorTheme: state.app.editorTheme,
    outputTheme: state.app.outputTheme,
    output: state.app.output,
    status: state.app.status
  }
}

export default connect(mapStateToProps)(App)
