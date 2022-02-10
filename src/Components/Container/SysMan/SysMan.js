import React, { Component } from 'react'
import {
  Container,
  Grid,
  Input,
  Segment,
  TextArea,
  Form,
  Button,
} from 'semantic-ui-react'
import './sysMan.css'

export default class SysMan extends Component {
  render() {
    return (
      <Grid>
        <Grid.Column>
          <Segment.Group>
            <Segment className="title">APPROVE or REVOKE SYS-MAN</Segment>
            <Segment.Group className="approve">
              <Input
                label={{ basic: true, content: 'ID' }}
                labelPosition="left"
                placeholder="Enter ID ..."
                className="input-id"
                // action={{ icon: 'search' }}
              ></Input>
              <Form>
                <TextArea placeholder="Description ..." />
              </Form>
              <Button.Group className="button-submit">
                <Button>REVOKE</Button>
                <Button.Or />
                <Button positive className="button-approve">
                  APPROVE
                </Button>
              </Button.Group>
            </Segment.Group>
          </Segment.Group>
        </Grid.Column>
      </Grid>
    )
  }
}
