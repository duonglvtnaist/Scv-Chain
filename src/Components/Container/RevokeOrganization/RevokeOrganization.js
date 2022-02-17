import React, { Component } from 'react'
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
import SidebarMenu from '../../Sidebar/SidebarMenu'
import { SidebarSysMan } from '../../Data/Data'

export default class RevokeOrganization extends Component {
  render() {
    return (
      <Container style={{ marginTop: '20px' }}>
        <Grid>
          <Grid.Column width={4}>
            <Menu fluid vertical tabular>
              {SidebarSysMan.map(MenuSysMan => (
                <SidebarMenu
                  link={MenuSysMan.link}
                  title={MenuSysMan.title}
                  icon={MenuSysMan.icon}
                  key={MenuSysMan.id}
                />
              ))}
            </Menu>
          </Grid.Column>
          <Grid.Column width="12">
            <Container>
              <Segment.Group>
                <Segment
                  raised
                  style={{ backgroundColor: 'rgb(252, 252, 252)' }}
                >
                  <Label color="blue" ribbon>
                    REVOKE ORG
                  </Label>
                </Segment>
                <div style={{ padding: '20px' }}>
                  <Input
                    label={{ basic: true, content: 'ID' }}
                    labelPosition="left"
                    placeholder="Enter ID ..."
                    className="input-id"
                    // action={{ icon: 'search' }}
                  ></Input>
                  <Form style={{ paddingBottom: '20px' }}>
                    <TextArea placeholder="Description ..." />
                  </Form>
                  <div className="button-submit">
                    <Button positive className="button-approve">
                      REVOKE
                    </Button>
                  </div>
                </div>
              </Segment.Group>
            </Container>
          </Grid.Column>
        </Grid>
      </Container>
    )
  }
}
