import React from 'react'

import './styles.css'

function buildStatusString (status) {
  return (
    <div className="Status__error">
      <p className="Status__error__type">Syntax Error</p>
      <p className="Status__error__message">{status.message}</p>
      <p className="Status__error__location">Line {status.line} Column {status.column}</p>
    </div>
  )
}

export default function ({ status }) {
  let className = 'Status'

  if (!status.message) {
    status = (
      <p className="Status__message">Code looks good 👍</p>
    )
    className += ' Status--ok'
  } else {
    status = buildStatusString(status)
    className += ' Status--error'
  }

  return (
    <div className={className}>
      {status}
    </div>
  )
}
