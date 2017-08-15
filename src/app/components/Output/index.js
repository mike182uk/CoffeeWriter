import React from 'react'
import Codemirror from 'react-codemirror'
import 'codemirror/mode/javascript/javascript'

import './styles.css'

export default function ({ children, theme }) {
  let options = {
    lineNumbers: true,
    mode: 'javascript',
    readOnly: true,
    theme: theme
  }

  return (
    <div className='Output'>
      <Codemirror options={options} value={children} />
    </div>
  )
}
