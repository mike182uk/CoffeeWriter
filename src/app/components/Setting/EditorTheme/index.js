import React from 'react'
import { connect } from 'react-redux'
import { setEditorTheme } from '../../../actions/settings'
import { getAllThemes as getAllEditorThemes } from '../../../editor'

const EditorThemeSetting = ({ dispatch, theme }) => {
  return (
    <div className='Settings__setting'>
      <label className='Setting__label'>Editor Theme</label>
      <select className='Setting__selector' value={theme} onChange={e => {
        dispatch(setEditorTheme(e.target.value))
      }}>
        {getAllEditorThemes().map(v => {
          return <option value={v} key={v}>{v}</option>
        })}
      </select>
    </div>
  )
}

export default connect()(EditorThemeSetting)
