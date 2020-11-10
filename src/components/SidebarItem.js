import React from 'react'

export default function SidebarItem(props) {
  return (
    <button 
      className={`sidebar-item ${props.active ? 'active' : ''}`}
      onClick={props.handleClick}
    >
      {props.name}
    </button>
  )
}
