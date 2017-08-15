import React from 'react'
import Selector from '../Selector'
import { getAllThemes as getAllEditorThemes } from '../../../editor'

export default function ({ theme, onChange }) {
  return (
    <Selector
      label='Output Theme'
      initialValue={theme}
      onChange={onChange}
      options={getAllEditorThemes()}
    />
  )
}
