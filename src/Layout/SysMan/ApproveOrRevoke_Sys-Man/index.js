import React, { Component } from 'react'
import Header from '../../../Components/Header/Header'
import ApproveSysMan from '../../../Components/Container/SysMan/SysMan'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Organization from '../../../Components/Container/Organization/Organization'
import SidebarMenu from '../../../Components/Sidebar/SidebarMenu'
import AddCV from '../../../Components/Container/AddCV/AddCV'
import RevokeCV from './../../../Components/Container/RevokeCV/RevokeCV'
import AddCertificate from './../../../Components/Container/AddCertificate/AddCertificate'
import ViewCV from './../../../Components/Container/ViewCV/ViewCV'

export default class SystemManage extends Component {
  render() {
    return (
      <Router>
        <Header />
        <Routes>
          <Route path="/add-cv" element={<AddCV />}></Route>
          <Route path="/add-certificate" element={<AddCertificate />}></Route>
          <Route path="/revoke-cv" element={<RevokeCV />}></Route>
          <Route path="/view-cv" element={<ViewCV />}></Route>

          <Route
            path="/approve-or-revoke-sysman"
            element={<ApproveSysMan />}
          ></Route>
          <Route
            path="/approve-or-revoke-org"
            element={<Organization />}
          ></Route>
        </Routes>
      </Router>
    )
  }
}
