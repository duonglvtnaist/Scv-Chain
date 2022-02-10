import React, { Component } from 'react'
import { Container, Icon, Menu } from 'semantic-ui-react'
import './header.css'

export default class Header extends Component {
  render() {
    return (
      <Menu
        attached="top"
        tabular
        style={{
          backgroundColor: 'rgb(62, 104, 184)',
          border: 'none',
          alignItems: 'center',
        }}
      >
        <Container>
          <Menu.Menu>
            <div className="header-left">
              <div className="logo">Scv - Chain</div>
            </div>
          </Menu.Menu>
          <Menu.Menu position="right">
            <div className="header-right">
              <Icon name="user" />
              <span className="user-name">Sys-Man</span>
            </div>
          </Menu.Menu>
        </Container>
      </Menu>
    )
  }
}
