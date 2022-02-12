import React, { Component } from 'react'
import { Container, Dropdown, Icon, Menu } from 'semantic-ui-react'
import SidebarMenu from '../Sidebar/SidebarMenu'
import MenuItem from '../Menu/MenuItem'
import './header.css'

export default class Header extends Component {
  render() {
    return (
      <Menu
        attached="top"
        tabular
        style={{
          backgroundColor: 'white',
          border: 'none',
          alignItems: 'center',
          borderRadius: 'none',
          padding: '10px',
        }}
      >
        <Container>
          <Menu.Menu>
            <div className="header-left">
              <div className="logo">Scv - Chain</div>
            </div>
          </Menu.Menu>
          <Menu.Menu position="right">
            <SidebarMenu />
          </Menu.Menu>
          <Menu.Menu position="right">
            <Dropdown icon="user" className="menu-parent">
              <Dropdown.Menu className="menu-item">
                <MenuItem
                  link="/profile"
                  title="Profile"
                  nameIcon="user secret"
                />
                <MenuItem
                  link="/edit-profile"
                  title="Edit Profile"
                  nameIcon="user secret"
                />
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Menu>
        </Container>
      </Menu>
    )
  }
}
