import React from 'react'
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
import AccountMain from '../AddCV/AccountMain'
import SidebarMenu from '../../Sidebar/SidebarMenu'

export default function RevokeCertificate(props) {
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
                <Label color="blue" ribbon>
                  REVOKE CERTIFICATEE
                </Label>
              </Segment>
              <div className="revokeCV">
                <AccountMain />
              </div>
            </Segment.Group>
          </Container>
        </Grid.Column>
      </Grid>
    </Container>
  )
}
