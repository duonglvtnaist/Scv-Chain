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
} from 'semantic-ui-react'
import './addCV.css'

export default function AddCV() {
  return (
    <div className="container-addCV">
      <Grid>
        <Grid.Column>
          <Segment className="title">ADD CV</Segment>
          <Container>
            <Segment.Group>
              <div className="addCV">
                <Input
                  label={{ basic: true, content: 'ACCOUNT ID' }}
                  labelPosition="left"
                  placeholder="Enter ID ..."
                  className="input-id"
                ></Input>
                <div className="addCV-Info">
                  <Input
                    label={{ basic: true, content: 'CID' }}
                    labelPosition="left"
                    placeholder="CID"
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
                  <Form>
                    <TextArea placeholder="Description ..." />
                  </Form>
                </div>
                <Button className="button-submit-cv">SUBMIT</Button>
              </div>
            </Segment.Group>
          </Container>
        </Grid.Column>
      </Grid>
    </div>
  )
}
