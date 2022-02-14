import React, { useState } from 'react'
import {
  Grid,
  Segment,
  Input,
  Form,
  Button,
  TextArea,
  Icon,
  Container,
  Menu,
  Label,
  Checkbox,
} from 'semantic-ui-react'
import './addCV.css'
import SidebarMenu from '../../Sidebar/SidebarMenu'
import { SidebarORG } from '../../Data/Data'

export default function AddCV(props) {
  return (
    <Container style={{ marginTop: '20px' }}>
      <Grid>
        <Grid.Column width={4}>
          <Menu fluid vertical tabular>
            {props.MenuName.map(Menu => (
              <SidebarMenu
                link={Menu.link}
                icon={Menu.icon}
                title={Menu.title}
                key={Menu.id}
              />
            ))}
          </Menu>
        </Grid.Column>
        <Grid.Column width={12}>
          <Container>
            <Segment.Group>
              <Segment raised style={{ backgroundColor: 'rgb(252, 252, 252)' }}>
                <Label color="blue" ribbon>
                  ADD CV
                </Label>
              </Segment>
              <div className="addCV">
                <Input
                  label={{ basic: true, content: 'ACCOUNT ID' }}
                  labelPosition="left"
                  placeholder="Enter ID ..."
                  className="input-id"
                ></Input>
                <div className="addCV-Info">
                  <div style={{ paddingBottom: '10px' }}>
                    <Checkbox label="Public" />
                  </div>
                  <Input
                    label={{ basic: true, content: 'CID' }}
                    labelPosition="left"
                    placeholder="CID"
                    className="input-cv"
                  />
                  <Input
                    label={{ basic: true, content: 'OWNER ID' }}
                    labelPosition="left"
                    placeholder="OWNER ID"
                    className="input-cv"
                  />
                  <Input
                    label={{ basic: true, content: 'CREATED DATE' }}
                    labelPosition="left"
                    placeholder="CREATED DATE"
                    className="input-cv"
                  />
                  <Input
                    label={{ basic: true, content: 'OrigDate' }}
                    labelPosition="left"
                    placeholder="OrigDate"
                    className="input-cv"
                  />
                  <Input
                    label={{ basic: true, content: 'ExpDate' }}
                    labelPosition="left"
                    placeholder="ExpDate"
                    className="input-cv"
                  />
                  <Input
                    label={{ basic: true, content: 'Type' }}
                    labelPosition="left"
                    placeholder="Type"
                    className="input-cv"
                  />
                  <Input
                    label={{ basic: true, content: 'KeyWork' }}
                    labelPosition="left"
                    placeholder="Ex: English, ReactJs, ..."
                    className="input-cv"
                  />
                  <Form>
                    <TextArea placeholder="Description ..." />
                  </Form>
                </div>
                <div className="button-submit">
                  <Button className="button-submit-cv">SUBMIT</Button>
                </div>
              </div>
            </Segment.Group>
          </Container>
        </Grid.Column>
      </Grid>
    </Container>
  )
}
