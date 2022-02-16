import React from 'react'
import { Grid, Container, Menu } from 'semantic-ui-react'
import SidebarMenu from '../../Sidebar/SidebarMenu'

export default function ViewCertificate(props) {
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
          <Container>View Certificate</Container>
        </Grid.Column>
      </Grid>
    </Container>
  )
}
