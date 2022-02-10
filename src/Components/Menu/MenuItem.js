import { Icon, Dropdown } from 'semantic-ui-react'
import React from 'react'
import { Link } from 'react-router-dom'
import './menuItem.css'

export default function MenuItem(props) {
  return (
    <Link to={props.link} className="link">
      {/* <li className="sidebarListItem">
        <Icon name={props.nameIcon} size="large" />
        <span className="titleItem">{props.title}</span>
      </li> */}
      <Dropdown.Item
        className="sidebarListItem"
        text={props.title}
        icon={props.nameIcon}
        size="large"
      ></Dropdown.Item>
    </Link>
  )
}
