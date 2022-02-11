import React, { Component } from 'react'
import Header from '../Components/Header/Header'
import ApproveSysMan from '../Components/Container/ApproveOrRevokeSysMan/SysMan'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Organization from '../Components/Container/ApproveOrRevokeOrganization/Organization'
import RevokeCV from '../Components/Container/RevokeCV/RevokeCV'
import AddCertificate from '../Components/Container/AddCertificate/AddCertificate'
import ViewCV from '../Components/Container/ViewCV/ViewCV'
import AddCV from './../Components/Container/AddCV/AddCV'
import CvRequest from './../Components/Container/Cv Request/CvRequest'

export default class SystemManage extends Component {
  render() {
    return (
      <Router>
        <Header />
        <Routes>
          <Route path="/org/add-cv" element={<AddCV />}></Route>
          <Route
            path="/org/add-certificate"
            element={<AddCertificate />}
          ></Route>
          <Route path="/org/revoke-cv" element={<RevokeCV />}></Route>
          <Route path="/org/view-cv" element={<ViewCV />}></Route>
          <Route path="/org/cv-request" element={<CvRequest />}></Route>

          <Route path="/user/add-cv" element={<AddCV />}></Route>
          <Route
            path="/user/add-certificate"
            element={<AddCertificate />}
          ></Route>

          <Route
            path="/sys-man/approve-or-revoke-sys-man"
            element={<ApproveSysMan />}
          ></Route>
          <Route
            path="/sys-man/approve-or-revoke-org"
            element={<Organization />}
          ></Route>
        </Routes>
      </Router>
    )
  }
}
