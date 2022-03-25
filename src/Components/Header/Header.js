import React, { Component } from 'react'
import { Container, Image } from 'semantic-ui-react'
import './header.css'

export default class Header extends Component {
  render() {
    return (
      <div className="headerLandingHome">
        <Container>
          <div className="headerContainer">
            <div className="headerLeft">
              {/* <Image
                src={`${process.env.PUBLIC_URL}/assets/logo-scv.png`}
                className="logoSCV"
              /> */}
              <p className="logoSCV">SMARTCV</p>
            </div>
            <div className="headerCenter">
              <div className="Menu">Home</div>
              <div className="Menu">Team</div>
              <div className="Menu">Docs</div>
            </div>
            <div className="headerRight">
              <button className="buttonConnectWallet">Connect wallet</button>
              <button className="buttonSignIn">Sign in</button>
              <button className="buttonSignup">Sign up</button>
            </div>
          </div>
        </Container>

        <div className="headerButton">
          <div className="headerButtonUpLoad">UPLOAD SCHOLARSHIP</div>
          <div className="headerButtonPostJob">POST JOB</div>
          <div className="headerButtonCreateCV">CREATE CV</div>
        </div>
      </div>
    )
  }
}
