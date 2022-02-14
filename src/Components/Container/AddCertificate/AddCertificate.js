import React from 'react'
import {
  Grid,
  Segment,
  Input,
  Form,
  Button,
  TextArea,
  Icon,
  Container,
  Checkbox,
  Menu,
  Label,
} from 'semantic-ui-react'
import './addCertificate.css'
import SidebarMenu from '../../Sidebar/SidebarMenu'
import { SidebarORG } from '../../Data/Data'

export default function AddCertificate(props) {
  return (
    <Container style={{ marginTop: '20px' }}>
      <Grid>
        <Grid.Column width={4}>
          <Menu fluid vertical tabular>
            {props.MenuName.map(MenuOrg => (
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
                  ADD CERTIFICATE
                </Label>
              </Segment>
              <div className="addCertificate">
                <Input
                  label={{ basic: true, content: 'ACCOUNT ID' }}
                  labelPosition="left"
                  placeholder="Enter ID ..."
                  className="input-id"
                ></Input>
                <div className="addCV-Info">
                  <div style={{ paddingBottom: '10px' }}>
                    <input type="file" id="getFile" />
                    <Checkbox label="Public" style={{ marginLeft: '15px' }} />
                  </div>
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
                  <Form>
                    <TextArea placeholder="Description ..." />
                  </Form>
                </div>
                <div className="button-submit">
                  <Button className="button-submit-certificate">SUBMIT</Button>
                </div>
              </div>
            </Segment.Group>
          </Container>
        </Grid.Column>
      </Grid>
    </Container>
  )
}
