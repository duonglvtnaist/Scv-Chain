import React from 'react'
import {
  Grid,
  Container,
  Segment,
  Input,
  Button,
  Menu,
  Label,
  Form,
  TextArea,
} from 'semantic-ui-react'
import SidebarMenu from '../../Sidebar/SidebarMenu'

export default function AllowRequestCV(props) {
  return (
    <Container style={{ marginTop: '20px' }}>
      <Grid>
        <Grid.Column width={4}>
          <Menu fluid vertical tabular>
            {props.MenuName.map(Menu => (
              <SidebarMenu
                link={Menu.link}
                icon={Menu.icon}
                title={Menu.title}
                key={Menu.id}
              />
            ))}
          </Menu>
        </Grid.Column>
        <Grid.Column width={12}>
          <Container>
            <Segment.Group>
              <Segment raised style={{ backgroundColor: 'rgb(252, 252, 252)' }}>
                <Label color="blue" ribbon className="show-title">
                  REQUEST SEE CV
                </Label>
              </Segment>
              <div style={{ padding: '20px' }}>
                <div style={{ paddingBottom: '20px' }}>
                  <Input
                    label={{ basic: true, content: 'ID' }}
                    labelPosition="left"
                    placeholder="ID ..."
                    className="input-id"
                  ></Input>
                  <Form>
                    <TextArea placeholder="Description ..." />
                  </Form>
                </div>
                <div className="button-submit">
                  <Button.Group>
                    <Button>Disallowance</Button>
                    <Button.Or />
                    <Button positive className="button-approve">
                      Allow
                    </Button>
                  </Button.Group>
                </div>
              </div>
            </Segment.Group>
          </Container>
        </Grid.Column>
      </Grid>
    </Container>
  )
}
