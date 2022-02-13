import React from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'
import './SidebarMenu.css'

export default function SidebarMenu(props) {
  return (
    <Link to={props.link} className="link">
      <Menu.Item
        icon={props.icon}
        name={props.title}
        key={props.id}
        className="sidebarListItem"
      />
    </Link>
  )
}
