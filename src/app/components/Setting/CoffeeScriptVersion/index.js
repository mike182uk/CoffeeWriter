import React from 'react'
import Selector from '../Selector'
import { getAllVersions as getAllCoffeeScriptVersions } from '../../../coffeescript'

export default function ({ version, onChange }) {
  return (
    <Selector
      label='CoffeeScript Version'
      initialValue={version}
      onChange={onChange}
      options={getAllCoffeeScriptVersions()}
    />
  )
}
