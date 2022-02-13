import React, { useState, useEffect } from 'react'
import {
  Grid,
  Segment,
  Input,
  Dropdown,
  Container,
  Icon,
  Button,
  Menu,
  Label,
} from 'semantic-ui-react'
import './viewCV.css'
import SidebarMenu from '../../Sidebar/SidebarMenu'
import { SidebarORG } from '../../Data/Data'

export default function ViewCV() {
  return (
    <Container style={{ marginTop: '20px' }}>
      <Grid>
        <Grid.Column width={4}>
          <Menu fluid vertical tabular>
            {SidebarORG.map(MenuOrg => (
              <SidebarMenu
                link={MenuOrg.link}
                icon={MenuOrg.icon}
                title={MenuOrg.title}
                key={MenuOrg.id}
              />
            ))}
          </Menu>
        </Grid.Column>
        <Grid.Column width="12">
          <Container>
            <Segment.Group>
              <Segment raised style={{ backgroundColor: 'rgb(252, 252, 252)' }}>
                <Label color="blue" ribbon>
                  VIEW CV
                </Label>
              </Segment>
              <div className="view-cv">
                <Input
                  label={{ basic: true, content: 'CV EnKey' }}
                  labelPosition="left"
                  placeholder="CV EnKey ..."
                  className="input-id"
                ></Input>
                <div className="button-submit">
                  <Button className="button-view-cv">View</Button>
                </div>
              </div>
            </Segment.Group>
            <Segment.Group>
              <Segment raised style={{ backgroundColor: 'rgb(252, 252, 252)' }}>
                <Label color="blue" ribbon className="show-title">
                  CV INFORMATION
                </Label>
              </Segment>
              <div className="show-cv">
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
    </Container>
  )
}
