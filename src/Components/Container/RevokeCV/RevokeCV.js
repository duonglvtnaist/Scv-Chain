import React from 'react'
import {
  Container,
  Grid,
  Input,
  Segment,
  TextArea,
  Form,
  Button,
} from 'semantic-ui-react'
import './revokeCV.css'

export default function RevokeCV() {
  return (
    <Grid style={{ marginTop: '10px' }}>
      <Grid.Column>
        <Container>
          <Segment className="title">REVOKE CV</Segment>
          <Segment.Group>
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
            <Button className="button-revoke-cv">REVOKE</Button>
          </Segment.Group>
        </Container>
      </Grid.Column>
    </Grid>
  )
}
