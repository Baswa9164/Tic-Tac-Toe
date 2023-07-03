import React from 'react'

export default function Square({value,handler}) {
  return (
        <div className="item-value" onClick={handler}>{value}</div>
  )
}
