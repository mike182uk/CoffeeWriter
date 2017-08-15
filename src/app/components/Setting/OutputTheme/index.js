import React from 'react'
import { connect } from 'react-redux'
import { setOutputTheme } from '../../../actions/settings'
import { getAllThemes as getAllEditorThemes } from '../../../editor'

const OutputThemeSetting = ({ dispatch, theme }) => {
  return (
    <div className='Settings_Setting'>
      <label className='Setting_Label'>Output Theme</label>
      <select value={theme} onChange={e => {
        dispatch(setOutputTheme(e.target.value))
      }}>
        {getAllEditorThemes().map(v => {
          return <option value={v} key={v}>{v}</option>
        })}
      </select>
    </div>
  )
}

export default connect()(OutputThemeSetting)
