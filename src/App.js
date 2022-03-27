import React, { createRef } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css'
import { Dimmer, Grid, Loader, Message } from 'semantic-ui-react'
import HomePage from './Layout/HomePage/HomePage'
import LandingPage from './Layout/LandingPage/LandingPage'
import { SubstrateContextProvider, useSubstrateState } from './substrate-lib'
import Login from './Components/Login/Login'
import SignUp from './Components/SignUp/SignUp'
import Sidebar from './Layout/Dashboard/Sidebar/Sidebar'
import Dashboard from './Layout/Dashboard/Dashboard'
import Profile from './Layout/Dashboard/Profile/Profile'
import EditProfile from './Components/EditProfile/EditProfile'

function Main() {
  const { apiState, apiError, keyringState } = useSubstrateState()

  const loader = text => (
    <Dimmer active>
      <Loader size="small">{text}</Loader>
    </Dimmer>
  )

  const message = errObj => (
    <Grid centered columns={2} padded>
      <Grid.Column>
        <Message
          negative
          compact
          floating
          header="Error Connecting to Substrate"
          content={`Connection to websocket '${errObj.target.url}' failed.`}
        />
      </Grid.Column>
    </Grid>
  )

  if (apiState === 'ERROR') return message(apiError)
  else if (apiState !== 'READY') return loader('Connecting to Substrate')

  if (keyringState !== 'READY') {
    return loader(
      "Loading accounts (please review any extension's authorization)"
    )
  }

  const contextRef = createRef()
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="home-page" element={<HomePage />}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="sign-up" element={<SignUp />}></Route>
        <Route path="dashboard" element={<Dashboard />}>
          <Route index element={<Profile />}></Route>
          <Route path="profile" element={<Profile />}></Route>
        </Route>
        <Route path="profile/edit-profile" element={<EditProfile />}></Route>
      </Routes>
    </Router>
  )
}

export default function App() {
  return (
    <SubstrateContextProvider>
      <Main />
    </SubstrateContextProvider>
  )
}
