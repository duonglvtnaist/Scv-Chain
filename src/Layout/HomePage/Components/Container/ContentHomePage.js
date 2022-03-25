import React, { useState } from 'react'
import { Container } from 'semantic-ui-react'
import CardJob from '../CardJob/CardJob'
import Search from '../Search/Search'
import './containerHomePage.css'

export default function ContentHomePage() {
  return (
    <div className="contentHomePage">
      <Container>
        <div className="chooseRule">
          <button className="chooseOrg ">For Organization</button>
          <button className="chooseTalent">For Talents</button>
        </div>
        <Search />
        <div style={{ paddingBottom: '20px' }}>
          <CardJob />
          <CardJob />
          <CardJob />
        </div>
      </Container>
    </div>
  )
}
