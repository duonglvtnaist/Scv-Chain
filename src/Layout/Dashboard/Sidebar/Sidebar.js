import React from 'react'
import './Sidebar.css'
import { Icon } from 'semantic-ui-react'
import { Link, Outlet } from 'react-router-dom'

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div>
        <Link to="/home-page">
          <div className="menuDashboard">
            <Icon name="home" className="iconMenu" size="big"></Icon>
            <span className="textMenu">Home</span>
          </div>
        </Link>
        <Link to="profile">
          <div className="menuDashboard">
            <Icon name="user circle" className="iconMenu" size="big"></Icon>
            <span className="textMenu">My Profile</span>
          </div>
        </Link>
        <div className="menuDashboard">
          <Icon name="window restore" className="iconMenu" size="big"></Icon>
          <span className="textMenu">Balance</span>
        </div>
        <div className="menuDashboard">
          <Icon name="clock outline" className="iconMenu" size="big"></Icon>
          <span className="textMenu">History</span>
        </div>
        <div className="menuDashboard">
          <Icon name="upload" className="iconMenu" size="big"></Icon>
          <span className="textMenu">Update CV</span>
        </div>
      </div>
      <div className="buttonLogOut">
        <Icon name="sign-out" className="iconMenu" size="big"></Icon>
        <span className="textMenu">Log Out</span>
      </div>
    </div>
  )
}
