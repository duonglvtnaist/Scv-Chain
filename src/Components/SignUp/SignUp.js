import React from 'react'
import { Container, Icon, Button, Image } from 'semantic-ui-react'
import iconWallet from '../../assets/Image/iconWallet.png'
import './signUp.css'
import { Link } from 'react-router-dom'

export default function SignUp() {
  return (
    <div className="signUp">
      <Container>
        <div className="infoAddress">
          <div className="wallet">
            <Image src={iconWallet} className="iconWallet"></Image>
          </div>
          <div className="addressDetail">
            <p className="textAddress">2394730dsfsdfewfsedf</p>
            <Icon name="angle down" size="large" color="black"></Icon>
          </div>
        </div>
        <div className="loginCenter">
          <p className="titleLogin">Sign Up</p>
          <div className="loginForm">
            <input placeholder="First Name" className="inputInfo" />
            <input placeholder="Last Name" className="inputInfo" />
            <input placeholder="Email Address" className="inputInfo" />
            <input
              placeholder="Password"
              className="inputPassword"
              type="password"
            />
            <Link to="/login">
              <Button type="submit" className="textButtonSignUp">
                SIGN UP
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  )
}
