import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Icon, Dropdown, Grid, Menu } from 'semantic-ui-react'
import MenuItem from '../Menu/MenuItem'
import './SidebarMenu.css'

export default class SidebarMenu extends Component {
  render() {
    return (
      <div className="sidebar">
        <Menu>
          <Dropdown text="System Manage" className="menu-parent">
            <Dropdown.Menu className="menu-item">
              <MenuItem
                link="/sys-man/approve-or-revoke-sys-man"
                title="Approve or Revoke SysMan"
                nameIcon="user secret"
              />
              <MenuItem
                link="/sys-man/approve-or-revoke-org"
                title=" Approve or Revoke Org"
                nameIcon="user secret"
              />
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown text="ORG" className="menu-parent">
            <Dropdown.Menu className="menu-item">
              <MenuItem
                link="/org/add-cv"
                title="Add CV"
                nameIcon="user secret"
              />
              <MenuItem
                link="/org/revoke-cv"
                title=" Revoke CV"
                nameIcon="user secret"
              />
              <MenuItem
                link="/org/view-cv"
                title=" View CV"
                nameIcon="user secret"
              />
              <MenuItem
                link="/org/add-certificate"
                title=" Add Certificate"
                nameIcon="user secret"
              />
              <MenuItem
                link="/org/cv-request"
                title=" CV Request"
                nameIcon="user secret"
              />
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown text="User" className="menu-parent">
            <Dropdown.Menu className="menu-item">
              <MenuItem
                link="/user/add-cv"
                title="Add CV"
                nameIcon="user secret"
              />
              <MenuItem
                link="/user/add-certificate"
                title="Add Certificate"
                nameIcon="user secret"
              />
            </Dropdown.Menu>
          </Dropdown>
        </Menu>
      </div>
    )
  }
}
