import React from 'react'
import Codemirror from 'react-codemirror'
import CopyButton from '../CopyButton'
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
      <CopyButton value={children} />
    </div>
  )
}
