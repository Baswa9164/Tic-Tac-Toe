import React from 'react'

export default function Replace({who}) {
  return (
    <div className={who==="X" ? "win-x" : "win-o"}> {who}</div>
  )
}
