import React from 'react'
import { connect } from 'react-redux'
import { setCoffeeScriptVersion, setEditorTheme, setOutputTheme } from '../../actions/settings'
import CoffeeScriptVersion from '../../components/Setting/CoffeeScriptVersion'
import EditorTheme from '../../components/Setting/EditorTheme'
import OutputTheme from '../../components/Setting/OutputTheme'

import './styles.css'
import '../../components/Setting/styles.css'

const Settings = ({ dispatch, coffeeScriptVersion, editorTheme, outputTheme }) => {
  return (
    <div className='Settings'>
      <OutputTheme theme={outputTheme} onChange={e => {
        dispatch(setOutputTheme(e.target.value))
      }} />
      <EditorTheme theme={editorTheme} onChange={e => {
        dispatch(setEditorTheme(e.target.value))
      }} />
      <CoffeeScriptVersion version={coffeeScriptVersion} onChange={e => {
        dispatch(setCoffeeScriptVersion(e.target.value))
      }} />
    </div>
  )
}

const mapStateToProps = state => {
  return {
    coffeeScriptVersion: state.app.coffeeScriptVersion,
    editorTheme: state.app.editorTheme,
    outputTheme: state.app.outputTheme
  }
}

export default connect(mapStateToProps)(Settings)
