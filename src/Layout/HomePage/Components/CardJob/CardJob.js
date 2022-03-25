import React from 'react'
import './cardJob.css'
import JobImg from '../../../../assets/Image/img1.png'
import { Image, Button } from 'semantic-ui-react'

export default function CardJob() {
  return (
    <div className="cardJob">
      <Image src={JobImg} alt="JobIMG" className="imageJob" />
      <div className="jobInfo">
        <div className="jobInfoTop">
          <span className="jobTitle">Product Manager</span>
          <span className="jobSalary">$10k - $15k / month</span>
        </div>
        <div className="jobInfoCenter">
          <div style={{ display: 'flex' }}>
            <p className="jobAddress">Los Angeles</p>
            <p className="jobTime">Full Time</p>
            <p className="jobProject">Big Project</p>
          </div>
          <div style={{ display: 'flex', marginTop: '10px' }}>
            <p className="jobCompany" style={{ fontWeight: 'bold' }}>
              Apple Inc
            </p>
            <p className="jobView">
              <span style={{ fontWeight: 'bold' }}>0</span> views
            </p>
            <p className="jobNumberApply">
              <span style={{ fontWeight: 'bold' }}>1</span> applications
            </p>
          </div>
        </div>
        <div className="jobInfoBottom">
          <span className="jobRequest">User Experience </span>
          <span className="jobRequest">Figma </span>
          <span className="jobRequest">Adobe Illustrator </span>
          <span className="jobRequest">User Interface</span>
        </div>
      </div>
      <div className="buttonJobDetail">
        <Button
          content="Detail"
          icon="right arrow"
          labelPosition="right"
          color="black"
        />
      </div>
    </div>
  )
}
