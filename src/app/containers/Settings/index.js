import React from 'react'
import CoffeeScriptVersion from '../../components/Setting/CoffeeScriptVersion'

import './styles.css'

export default function ({ coffeeScriptVersion }) {
  return (
    <div className='Settings'>
      <CoffeeScriptVersion version={coffeeScriptVersion} />
    </div>
  )
}
