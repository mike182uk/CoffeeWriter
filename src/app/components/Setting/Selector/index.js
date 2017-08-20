import React from 'react'

import './styles.css'

export default function ({ label, initialValue, options, onChange }) {
  return (
    <div className='Settings__setting'>
      <label className='Setting__label'>{label}</label>
      <select className='Setting__selector' value={initialValue} onChange={onChange}>
        {options.map(v => {
          return <option value={v} key={v}>{v}</option>
        })}
      </select>
    </div>
  )
}
