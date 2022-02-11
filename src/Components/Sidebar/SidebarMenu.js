import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Icon, Dropdown, Grid } from 'semantic-ui-react'
import MenuItem from '../Menu/MenuItem'
import './SidebarMenu.css'

export default class SidebarMenu extends Component {
  render() {
    return (
      <div className="sidebar">
        <Dropdown text="System Manage" className="menu-parent">
          <Dropdown.Menu className="menu-item">
            <MenuItem
              link="/approve-or-revoke-sysman"
              title="Approve or Revoke SysMan"
              nameIcon="user secret"
            />
            <MenuItem
              link="/approve-or-revoke-org"
              title=" Approve or Revoke Org"
              nameIcon="user secret"
            />
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown text="ORG" className="menu-parent">
          <Dropdown.Menu className="menu-item">
            <MenuItem link="/add-cv" title="Add CV" nameIcon="user secret" />
            <MenuItem
              link="/revoke-cv"
              title=" Revoke CV"
              nameIcon="user secret"
            />
            <MenuItem link="/view-cv" title=" View CV" nameIcon="user secret" />
          </Dropdown.Menu>
        </Dropdown>
      </div>
    )
  }
}
