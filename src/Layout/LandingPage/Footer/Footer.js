import React from 'react'
import './footer.css'

export default function Footer() {
  return (
    <div>
      <div className="footer">
        <div className="footerTop">
          <div className="footerTopLeft">
            <p
              style={{
                fontSize: '50px',
                fontWeight: '700',
                lineHeight: '50px',
                marginBottom: '5px',
              }}
            >
              SMARTCV
            </p>
            <span className="slogan">Labor Hub For Matching Talents</span>
          </div>
          <div className="footerTopCenter">
            <p
              style={{
                fontSize: '40px',
                fontWeight: '400',
                lineHeight: '50px',
              }}
            >
              Resources
            </p>
            <p className="titleResources">Whitepaper</p>
            <p className="titleResources">Tokenomics</p>
            <p className="titleResources">Tokenomics</p>
          </div>
          <div className="footerTopRight">
            <p
              style={{
                fontSize: '40px',
                fontWeight: '400',
                lineHeight: '50px',
              }}
            >
              Company
            </p>
            <p className="titleCompany">Team</p>
            <p className="titleCompany">Blog</p>
            <p className="titleCompany">Brand Guild</p>
          </div>
        </div>
      </div>
      <hr style={{ width: '100%', border: '1px solid #00000' }} />
      <div className="footerBottom">
        <div className="footerBotLeft">
          <span className="copyRight">
            @ 2022 Smart CV Network. All Rights Reserved
          </span>
        </div>
        <div className="footerBotCenter">
          <p className="titleBot">Cookie Statement</p>
        </div>
        <div className="footerBotRight">
          <p className="titleBot">Privacy Policy</p>
        </div>
      </div>
    </div>
  )
}
