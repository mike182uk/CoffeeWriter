import React from 'react'

import './styles.css'

export default function ({ status }) {
  let className = 'Status'

  if (status == '') {
    status = 'Everything is OK!'
    className += ' Status--ok'
  } else {
    className += ' Status--error'
  }

  return (
    <div className={className}>
      {status}
    </div>
  )
}
