import React from 'react'
import { connect } from 'react-redux'
import SplitterLayout from 'react-splitter-layout'
import Editor from '../Editor'
import Status from '../../components/Status'
import Output from '../../components/Output'
import Settings from '../Settings'

import './styles.css'

const App = ({ outputTheme, output, status }) => {
  return (
    <div className='App'>
      <div className='App__Settings'>
        <Settings />
      </div>
      <div className='App__EditorOutput'>
        <SplitterLayout percentage primaryMinSize={20} secondaryMinSize={20} secondaryInitialSize={50}>
          <Editor />
          <Output theme={outputTheme}>{output}</Output>
        </SplitterLayout>
      </div>
      <div className='App__Status'>
        <Status status={status} />
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    outputTheme: state.app.outputTheme,
    output: state.app.output,
    status: state.app.status
  }
}

export default connect(mapStateToProps)(App)
