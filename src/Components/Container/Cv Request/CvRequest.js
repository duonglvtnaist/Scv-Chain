import React from 'react'
import {
  Grid,
  Container,
  Segment,
  Input,
  Button,
  Menu,
  Label,
  Form,
  TextArea,
} from 'semantic-ui-react'
import './cvRequest.css'
import { SidebarORG } from '../../Data/Data'
import SidebarMenu from '../../Sidebar/SidebarMenu'

export default function CvRequest() {
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
                <Label color="blue" ribbon className="show-title">
                  REQUEST CV
                </Label>
              </Segment>
              <div style={{ padding: '20px' }}>
                <div className="request-cv">
                  <Input
                    label={{ basic: true, content: 'ID' }}
                    labelPosition="left"
                    placeholder="ID ..."
                    className="input-id"
                  ></Input>
                  <Form>
                    <TextArea placeholder="Description ..." />
                  </Form>
                </div>
                <div className="button-submit">
                  <Button className="button-request-cv">Request</Button>
                </div>
              </div>
            </Segment.Group>
          </Container>
        </Grid.Column>
      </Grid>
    </Container>
  )
}
