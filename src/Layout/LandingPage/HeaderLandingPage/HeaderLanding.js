import React from 'react'
import { Container, Grid, Image } from 'semantic-ui-react'
import './headerLandingPage.css'

export default function HeaderLanding() {
  return (
    <div className="headerLanding">
      <Container>
        <div className="headerContainer">
          <div className="headerLeft">
            <Image
              src={`${process.env.PUBLIC_URL}/assets/logo-scv.png`}
              className="logoSCV"
            />
          </div>
          <div className="headerCenter">
            <div className="Menu">Home</div>
            <div className="Menu">Team</div>
            <div className="Menu">Docs</div>
          </div>
          <div className="headerRight">
            <button className="SignUp">Sign up</button>
          </div>
        </div>
      </Container>
    </div>
  )
}
