import React from 'react'
import BlockNumber from '../../BlockNumber'
import { Container, Grid } from 'semantic-ui-react'
import NodeInfo from '../../NodeInfo'
import Metadata from '../../Metadata'
import Balances from '../../Balances'

export default function HomePage() {
  return (
    <Container style={{ marginTop: '20px' }}>
      <Grid stackable columns="equal">
        <Grid.Row stretched style={{ marginBottom: '10px' }}>
          <NodeInfo />
          <Metadata />
          <BlockNumber />
          <BlockNumber finalized />
        </Grid.Row>
      </Grid>
      <Balances />
    </Container>
  )
}
