import React, { Component } from 'react'
import { Container, Dropdown, Icon, Image, Menu } from 'semantic-ui-react'
import SidebarMenu from '../Sidebar/SidebarMenu'
import MenuItem from '../Menu/MenuItem'
import './header.css'
import SysMan from '../Container/ApproveSysMan/ApproveSysMan'
import Organization from '../Container/ApproveOrganization/ApproveOrganization'
import { SidebarAccountType } from '../Data/Data'
import { Link } from 'react-router-dom'

export default class Header extends Component {
  render() {
    return (
      <Menu
        tabular
        style={{
          backgroundColor: 'rgb(0,151,202)',
          border: 'none',
          alignItems: 'center',
          borderRadius: 'none',
          padding: '10px',
        }}
      >
        <Container>
          <Menu.Menu>
            <Link to="/home-page" className="link">
              <Image
                src={`${process.env.PUBLIC_URL}/assets/logo-scv.png`}
                className="logo"
              />
            </Link>
          </Menu.Menu>
          {/* <Menu.Menu position="right">
            <SidebarMenu />
          </Menu.Menu> */}
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
            <Dropdown text="Account Type" className="menu-parent">
              <Dropdown.Menu>
                {SidebarAccountType.map(MenuAccountType => (
                  <MenuItem
                    link={MenuAccountType.link}
                    title={MenuAccountType.title}
                    icon={MenuAccountType.icon}
                    key={MenuAccountType.id}
                  />
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Menu>
        </Container>
      </Menu>
    )
  }
}
