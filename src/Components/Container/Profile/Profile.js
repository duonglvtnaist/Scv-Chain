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
} from 'semantic-ui-react'
import './Profile.css'

export default function Profile() {
  return (
    <Grid style={{ marginTop: '10px' }}>
      <Container>
        <Segment className="title">Profile</Segment>
        <Grid.Row>
          <Grid.Column>
            <Segment.Group>
              <div className="profileShow">
                <Input
                  label={{ basic: true, content: 'Pubkey' }}
                  labelPosition="left"
                  placeholder="Pubkey ..."
                  className="input-id"
                  value="edwskruw9e98sdfh34w87"
                  disabled
                ></Input>
                <div className="profileShowTitle">
                  <div style={{ width: '50%' }}>
                    <span className="showTitle">Account Detail</span>
                    <div className="profileShowInfo">
                      <Icon name="box" />
                      <span className="showInfoTitle">Alice</span>
                    </div>
                    <div className="profileShowInfo">
                      <Icon name="box" />
                      <span className="showInfoTitle">10/10/1995</span>
                    </div>
                    <div className="profileShowInfo">
                      <Icon name="box" />
                      <span className="showInfoTitle">Male</span>
                    </div>
                    <div className="profileShowInfo">
                      <Icon name="box" />
                      <span className="showInfoTitle">5</span>
                      <Icon name="star" color="yellow" />
                    </div>
                  </div>
                  <div style={{ width: '50%' }}>
                    <span className="showTitle">Contact Detail</span>
                    <div className="profileShowInfo">
                      <Icon name="box" />
                      <span className="showInfoTitle">+84 987389239</span>
                    </div>
                    <div className="profileShowInfo">
                      <Icon name="box" />
                      <span className="showInfoTitle">Alice@gmail.com</span>
                    </div>
                    <div className="profileShowInfo">
                      <Icon name="box" />
                      <span className="showInfoTitle">HCM - VN</span>
                    </div>
                  </div>
                </div>
              </div>
            </Segment.Group>
          </Grid.Column>
        </Grid.Row>
      </Container>
    </Grid>
  )
}
