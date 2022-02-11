import React, { useState, useEffect } from 'react'
import {
  Grid,
  Segment,
  Input,
  Dropdown,
  Container,
  Icon,
  Button,
} from 'semantic-ui-react'
import './viewCV.css'

export default function ViewCV() {
  return (
    <Grid style={{ marginTop: '10px' }}>
      <Grid.Column>
        <Container>
          <Segment className="title">View CV</Segment>
          <Segment.Group>
            <div className="view-cv">
              <Input
                label={{ basic: true, content: 'CV EnKey' }}
                labelPosition="left"
                placeholder="CV EnKey ..."
                className="input-id"
              ></Input>
              <div className="button-view">
                <Button className="button-view-cv">View</Button>
              </div>
            </div>
          </Segment.Group>
          <Segment.Group>
            <div className="show-cv">
              <span className="show-title">CV INFORMATION</span>
              <div className="cv-info">
                <label>CID: </label>
                <span className="show-content">0</span>
              </div>
              <div className="cv-info">
                <label>Owner ID: </label>
                <span className="show-content">
                  5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY
                </span>
              </div>
              <div className="cv-info">
                <label>SCORE: </label>
                <span className="show-content">5</span>
                <Icon name="star" color="yellow" />
              </div>
              <div className="cv-info">
                <label>METADATA: </label>
                <span className="show-content">0x6d6f74</span>
              </div>
              <div className="cv-info">
                <label>OrigDate: </label>
                <span className="show-content">01/01/2022</span>
              </div>
              <div className="cv-info">
                <label>ExpDate: </label>
                <span className="show-content">31/12/2022</span>
              </div>
            </div>
          </Segment.Group>
        </Container>
      </Grid.Column>
    </Grid>
  )
}
