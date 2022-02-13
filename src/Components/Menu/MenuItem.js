import { Icon, Dropdown } from 'semantic-ui-react'
import React from 'react'
import { Link } from 'react-router-dom'
import './menuItem.css'

export default function MenuItem(props) {
  return (
    <Link to={props.link} className="link">
      <Dropdown.Item
        className="sidebarListItem"
        text={props.title}
        icon={props.icon}
        size="large"
      ></Dropdown.Item>
    </Link>
  )
}
