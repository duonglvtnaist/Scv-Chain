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

export default class Organization extends Component {
  render() {
    return (
      <Grid style={{ marginTop: '10px' }}>
        <Grid.Column>
          <Container>
            <Segment className="title">APPROVE or REVOKE ORG</Segment>
            <Segment.Group className="approve">
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
                <Button.Group className="button-submit">
                  <Button>REVOKE</Button>
                  <Button.Or />
                  <Button positive className="button-approve">
                    APPROVE
                  </Button>
                </Button.Group>
              </div>
            </Segment.Group>
          </Container>
        </Grid.Column>
      </Grid>
    )
  }
}
