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
} from 'semantic-ui-react'
import './addCertificate.css'

export default function AddCertificate() {
  return (
    <Grid style={{ marginTop: '10px' }}>
      <Grid.Column>
        <Container>
          <Segment className="title">ADD CERTIFICATE</Segment>
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
  )
}
