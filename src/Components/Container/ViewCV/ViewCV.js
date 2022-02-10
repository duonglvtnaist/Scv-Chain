import React, { useState, useEffect } from 'react'
import {
  Grid,
  Segment,
  Input,
  Dropdown,
  Container,
  Icon,
} from 'semantic-ui-react'
import './viewCV.css'
import { useSubstrate } from '../../../substrate-lib'

export default function ViewCV() {
  const friendOptions = [
    {
      key: 'Jenny Hess',
      text: 'Jenny Hess',
      value: '5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY',
    },
    {
      key: 'Elliot Fu',
      text: 'Elliot Fu',
      value: '5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQ',
    },
  ]
  return (
    <div className="container-view-cv">
      <Grid>
        <Grid.Column>
          <Segment className="title">View CV</Segment>
          <Container>
            <Segment.Group>
              <div className="view-cv">
                <Dropdown
                  selection
                  fluid
                  placeholder="Select an account"
                  options={friendOptions}
                />
              </div>
            </Segment.Group>
            <Segment.Group>
              <div className="show-cv">
                <span className="show-title">CV INFORMATION OF JENNY HESS</span>
                <div className="cv-info">
                  <label>CID: </label>
                  <span className="show-content">0</span>
                </div>
                <div className="cv-info">
                  <label>ORG: </label>
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
              </div>
            </Segment.Group>
          </Container>
        </Grid.Column>
      </Grid>
    </div>
  )
}
