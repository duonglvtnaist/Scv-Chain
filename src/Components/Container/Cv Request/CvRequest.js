import React from 'react'
import { Grid, Container, Segment, Input, Button } from 'semantic-ui-react'
import './cvRequest.css'

export default function CvRequest() {
  return (
    <Grid style={{ marginTop: '10px' }}>
      <Grid.Column>
        <Container>
          <Segment className="title">CV Request</Segment>
          <Segment.Group>
            <div className="view-cv">
              <Input
                label={{ basic: true, content: 'ID' }}
                labelPosition="left"
                placeholder="ID ..."
                className="input-id"
              ></Input>
              <Input
                label={{ basic: true, content: 'PubKey' }}
                labelPosition="left"
                placeholder="PubKey ..."
                className="input-id"
              ></Input>
              <div className="button-submit">
                <Button className="button-request-cv">Request</Button>
              </div>
            </div>
          </Segment.Group>
        </Container>
      </Grid.Column>
    </Grid>
  )
}
