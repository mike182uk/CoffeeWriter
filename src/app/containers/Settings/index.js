import React from 'react'
import CoffeeScriptVersion from '../../components/Setting/CoffeeScriptVersion'
import EditorTheme from '../../components/Setting/EditorTheme'
import OutputTheme from '../../components/Setting/OutputTheme'

import './styles.css'
import '../../components/Setting/styles.css'

export default function ({ coffeeScriptVersion, editorTheme, outputTheme }) {
  return (
    <div className='Settings'>
      <CoffeeScriptVersion version={coffeeScriptVersion} />
      <OutputTheme theme={outputTheme} />
      <EditorTheme theme={editorTheme} />
    </div>
  )
}
