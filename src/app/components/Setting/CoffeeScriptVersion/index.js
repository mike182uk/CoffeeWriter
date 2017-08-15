import React from 'react'
import { connect } from 'react-redux'
import { setCoffeeScriptVersion } from '../../../actions/settings'
import { getAllVersions as getAllCoffeeScriptVersions } from '../../../coffeescript'

const CoffeeScriptVersionSetting = ({ dispatch, version }) => {
  return (
    <div className='Settings__setting'>
      <label className='Setting__label'>CoffeeScript Version</label>
      <select className='Setting__selector' value={version} onChange={e => {
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
