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
import './addCertificate.css'

export default function AddCertificate() {
  return (
    <div className="container-addCertificate">
      <Grid>
        <Grid.Column>
          <Segment className="title">ADD CERTIFICATE</Segment>
          <Container>
            <Segment.Group>
              <div className="addCertificate">
                <Input
                  label={{ basic: true, content: 'ACCOUNT ID' }}
                  labelPosition="left"
                  placeholder="Enter ID ..."
                  className="input-id"
                ></Input>
                <div className="addCV-Info">
                  <div style={{ paddingBottom: '10px' }}>
                    {/* <label className="input-file">
                  <Icon name="upload" />
                  Choose file <input type="file" id="getFile" />
                </label> */}
                    <input type="file" id="getFile" />
                  </div>
                  <Form>
                    <TextArea placeholder="Description ..." />
                  </Form>
                </div>
                <Button className="button-submit-certificate">SUBMIT</Button>
              </div>
            </Segment.Group>
          </Container>
        </Grid.Column>
      </Grid>
    </div>
  )
}
