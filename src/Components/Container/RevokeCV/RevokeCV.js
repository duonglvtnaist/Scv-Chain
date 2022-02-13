import React from 'react'
import {
  Container,
  Grid,
  Input,
  Segment,
  TextArea,
  Form,
  Button,
  Menu,
  Label,
} from 'semantic-ui-react'
import './revokeCV.css'
import SidebarMenu from '../../Sidebar/SidebarMenu'
import { SidebarORG } from '../../Data/Data'

export default function RevokeCV() {
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
        <Grid.Column width={12}>
          <Container>
            <Segment.Group>
              <Segment raised style={{ backgroundColor: 'rgb(252, 252, 252)' }}>
                <Label color="blue" ribbon>
                  REVOKE CV
                </Label>
              </Segment>
              <div className="revokeCV">
                <Input
                  label={{ basic: true, content: 'CV ID' }}
                  labelPosition="left"
                  placeholder="Enter CID ..."
                  className="input-cv-id"
                  // action={{ icon: 'search' }}
                ></Input>
                <Input
                  label={{ basic: true, content: 'CID' }}
                  labelPosition="left"
                  placeholder="Enter CID ..."
                  className="input-cid"
                />
              </div>
              <div className="button-submit">
                <Button className="button-revoke-cv">REVOKE</Button>
              </div>
            </Segment.Group>
          </Container>
        </Grid.Column>
      </Grid>
    </Container>
  )
}
