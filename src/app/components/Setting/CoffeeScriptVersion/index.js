import React from 'react'
import { connect } from 'react-redux'
import { setCoffeeScriptVersion } from '../../../actions/settings'
import { getAllVersions as getAllCoffeeScriptVersions } from '../../../coffeescript'

const CoffeeScriptVersionSetting = ({ dispatch, version }) => {
  return (
    <div className='Settings_Setting'>
      <label className='Setting_Label'>CoffeeScript Version</label>
      <select value={version} onChange={e => {
        dispatch(setCoffeeScriptVersion(e.target.value))
      }}>
        {getAllCoffeeScriptVersions().map(v => {
          return <option value={v} key={v}>{v}</option>
        })}
      </select>
    </div>
  )
}

export default connect()(CoffeeScriptVersionSetting)
