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
import './sysMan.css'
import SidebarMenu from '../../Sidebar/SidebarMenu'
import { SidebarSysMan } from '../../Data/Data'

export default class SysMan extends Component {
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
          <Grid.Column width={12}>
            <Segment.Group>
              <Segment raised style={{ backgroundColor: 'rgb(252, 252, 252)' }}>
                <Label color="blue" ribbon>
                  APPROVE or REVOKE SYS-MAN
                </Label>
              </Segment>
              <div className="approve">
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
                  <Button.Group>
                    <Button>REVOKE</Button>
                    <Button.Or />
                    <Button positive className="button-approve">
                      APPROVE
                    </Button>
                  </Button.Group>
                </div>
              </div>
            </Segment.Group>
          </Grid.Column>
        </Grid>
      </Container>
    )
  }
}
