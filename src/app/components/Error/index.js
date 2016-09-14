import React from 'react'

import './styles.css'

export default function ({ children }) {
  return (
    <div className="Error">
      {children}
    </div>
  )
}
