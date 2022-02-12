import React from 'react'
import {
  Container,
  Grid,
  Icon,
  Segment,
  Input,
  Item,
  TextArea,
  Label,
  Button,
} from 'semantic-ui-react'
import './Profile.css'

export default function EditProfile() {
  return (
    <Grid style={{ marginTop: '10px' }}>
      <Container>
        <Segment className="title">Edit profile</Segment>
        <Grid.Row>
          <Grid.Column>
            <Segment.Group>
              <Container style={{ padding: '20px' }}>
                <span className="profileUpdateTitle">Edit Profile</span>
                <form className="profileUpdateForm">
                  <div className="profileUpdateLeft">
                    <Input
                      label={{ basic: true, content: 'Pubkey' }}
                      labelPosition="left"
                      placeholder="Pubkey ..."
                      className="input-id"
                      value="edwskruw9e98sdfh34w87"
                    ></Input>
                    <div className="profileUpdateItem">
                      <label>User Name</label>
                      <input
                        type="text"
                        placeholder="Alice"
                        className="profileUpdateInput"
                      />
                    </div>
                    <div className="profileUpdateItem">
                      <label>Birthday</label>
                      <input
                        type="date"
                        placeholder="Alice"
                        className="profileUpdateInput"
                      />
                    </div>
                    <div className="profileUpdateItem">
                      <label>Phone</label>
                      <input type="text" className="profileUpdateInput" />
                    </div>
                    <div className="profileUpdateItem">
                      <label>Email</label>
                      <input
                        type="email"
                        placeholder="alice@gmail.com"
                        className="profileUpdateInput"
                      />
                    </div>
                  </div>
                  <div className="button-submit">
                    <Button className="button-update-profile">Update</Button>
                  </div>
                </form>
              </Container>
            </Segment.Group>
          </Grid.Column>
        </Grid.Row>
      </Container>
    </Grid>
  )
}
