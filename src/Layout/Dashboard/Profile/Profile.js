import React from 'react'
import './profile.css'
import { Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export default function Profile() {
  return (
    <div className="profile">
      <div className="navbar">
        <Icon name="bell outline" size="big"></Icon>
        <Icon name="user circle" size="huge"></Icon>
      </div>
      <div className="userProfile">
        <div className="userInfo">
          <div className="userInfoDetail">
            <Icon name="user circle" size="massive"></Icon>
            <div className="userInfoName">
              <span className="userName">John Lemon</span>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <Icon name="map marker alternate" size="big"></Icon>
                <span className="userAddress">Lost Angeles</span>
              </div>
            </div>
            <div className="buttonEditProfile">
              <Link to="/profile/edit-profile">
                <span className="editProfile">Edit Profile</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
