import React from 'react'
import { Form, Radio, Image, Icon } from 'semantic-ui-react'
import UserImage from '../../assets/Image/img1.png'
import './editProfile.css'
import { Link } from 'react-router-dom'

export default function EditProfile() {
  return (
    <div className="editProfileMain">
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Form className="formInput">
          <Form.Field className="formField">
            <label>Account ID</label>
            <input
              type="text"
              placeholder="Account ID"
              className="inputProfile"
              name="accountid"
            ></input>
          </Form.Field>
          <Form.Group>
            <Form.Field className="formCheck">
              <label>Role</label>
              <Radio
                label="Organization"
                name="role"
                style={{ marginLeft: '80px' }}
              />
              <Radio label="Individual" name="role" />
            </Form.Field>
          </Form.Group>
          <Form.Field className="formField">
            <label>First Name</label>
            <input
              type="text"
              placeholder="First Name"
              className="inputProfile"
              name="firstname"
            ></input>
          </Form.Field>
          <Form.Field className="formField">
            <label>Last Name</label>
            <input
              type="text"
              placeholder="Last Name"
              className="inputProfile"
              name="lastname"
            ></input>
          </Form.Field>
          <Form.Field className="formField">
            <label>Date of Birth</label>
            <input
              type="date"
              placeholder="Last Name"
              className="inputProfile"
              name="dateofbirth"
            ></input>
          </Form.Field>
          <Form.Field className="formCheck">
            <label>Sex</label>
            <Radio label="Male" name="sex" />
            <Radio label="Female" name="sex" />
          </Form.Field>
          <Form.Field className="formCheck">
            <label>Marital Status</label>
            <Radio
              label="Single"
              name="marital"
              style={{ marginLeft: '-82px' }}
            />
            <Radio label="Married" name="marital" />
          </Form.Field>
          <Form.Field className="formField">
            <label>Location</label>
            <input
              type="text"
              placeholder="Location"
              className="inputProfile"
              name="location"
            ></input>
          </Form.Field>
          <Form.Field className="formField">
            <label>Phone Number</label>
            <input
              type="text"
              placeholder="Phone number"
              className="inputProfile"
              name="phonenumber"
            ></input>
          </Form.Field>
          <Form.Field className="formField">
            <label>Website</label>
            <input type="text" className="inputProfile" name="website"></input>
          </Form.Field>
        </Form>
        <div className="infoRight">
          <Image src={UserImage} className="userImg"></Image>
          <p className="userName">John Lemon</p>
          <p className="addressInfo">832748w7</p>
        </div>
      </div>
      <div className="editProfileBot">
        <Link to="/dashboard/profile">
          <Icon
            name="arrow left"
            size="large"
            className="iconBack"
            color="black"
          ></Icon>
        </Link>
        <button type="submit" className="buttonSave">
          Save
        </button>
      </div>
    </div>
  )
}
