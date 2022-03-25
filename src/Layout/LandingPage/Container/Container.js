import React from 'react'
import { Container, Image, Card, Icon } from 'semantic-ui-react'
import './Banner.css'
import { MemberListData } from '../../../Components/Data/Data'
import MemberList from './MemberList'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import PartnerOctopus from '../../../assets/Image/octopus.png'
import PartnerNear from '../../../assets/Image/logoNear.png'
import { Link } from 'react-router-dom'

export default function ContainerLanding() {
  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
  }
  return (
    <div>
      <div className="banner">
        <Image
          src="https://images.unsplash.com/photo-1601509876296-aba16d4c10a4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          className="bannerImg"
        />
        <span className="content1">Labor Hub For Matching Talents</span>
        <span className="content2">
          Data Reliable.
          <br /> Smart Matching.
          <br /> High Privacy Protection.
        </span>
        <Link to="/home-page">
          <button className="buttonUseApp">Use App</button>
        </Link>
        <button className="buttonSignUp">Sign up</button>
      </div>

      <div className="ScvIntroduce">
        <h1 style={{ textAlign: 'center', fontSize: '35px' }}>
          What is SmartCV?
        </h1>
        <p className="content">
          Smart CV is a labor hub for matching talents to appropriate job
          positions. <br />
          Smart CV aims to help organizations find the right talents at low
          recruitment cost, and employees easily find jobs positions most
          suitable for their talents and skills.
        </p>
      </div>

      <div>
        <Image
          src="https://images.unsplash.com/photo-1503423571797-2d2bb372094a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
          className="imageRoom"
        />
        <div className="card">
          <div className="cardContent">
            <h2 style={{ fontSize: '25px' }}>Data Reliable</h2>
            <p className="cardDescription">
              Trustless Web3 Community Evaluation Algorithm help evaluating
              reliability of user CVs based on certified score of Certified
              Entities(CE) by utilizing the history data related to these CEs
              and reliable score of new broadcast CVs its provided{' '}
            </p>
          </div>
          <div className="cardContent">
            <h2 style={{ fontSize: '25px' }}>Smart Matching</h2>
            <p className="cardDescription">
              Based on rich reliable data provided by W3CEA, Keyword Search
              Engine and AI engine can provide incredible accurate matching
              results.{' '}
            </p>
          </div>
          <div className="cardContent">
            <h2 style={{ fontSize: '25px' }}>High Privacy Protection</h2>
            <p className="cardDescription">
              CV Delivery Merchanism(CDM) user’s privacy data to be encrypted
              for security purposes. When the CEs allowed see the encrypted
              data, users don’t need to transfer the data encryted key but the
              CDM will allow share internaly, which help a void leakage or
              sharing of encrytion key unexpectedly{' '}
            </p>
          </div>
        </div>
      </div>

      <div className="roadMap">
        <h1 style={{ textAlign: 'center', fontSize: '50px' }}>ROAD MAP</h1>
        <div className="ellipse">
          <div className="ellipseBlack"></div>
          <div className="ellipseGray1"></div>
          <div className="ellipseGray2"></div>
          <div className="ellipseGray3"></div>
          <div className="line"></div>
        </div>
        <div className="contentRoadMap">
          <div className="contentRoadMapDes1">
            <div className="titleRoadMap">Phase 0</div>
            <p>2/2022</p>
            <span className="content">
              SmartCV v1 Demo <br /> Basic Search Engine <br /> Octopus
              Interface
            </span>
          </div>
          <div className="contentRoadMapDes2">
            <div className="titleRoadMap">Phase 1</div>
            <p>8/2022</p>
            <span className="content">
              SmartCV v.2 <br /> Basic W3CEA <br /> Octopus Live
            </span>
          </div>
          <div className="contentRoadMapDes3">
            <div className="titleRoadMap">Phase 2</div>
            <p>2/2023</p>
            <span className="content">
              Advanced Matching: AI Engine <br /> Advanced W3CEA with AI <br />{' '}
              Massive Marketing Campaign
            </span>
          </div>
          <div className="contentRoadMapDes4">
            <div className="titleRoadMap">Phase 3</div>
            <p>8/2023</p>
            <span className="content">ICO, etc.</span>
          </div>
        </div>
      </div>

      <div className="scvToken">
        <h1 style={{ textAlign: 'center', fontSize: '50px' }}>SCV Token</h1>
        <div className="subTitle">
          SCV is the native token of SmartCV Network
        </div>
        <div className="scvTokenPurpose">
          <div className="scvTokenContent card1">
            <p className="scvTokenDes">Rewards for CEs, Checkers and Miners</p>
          </div>
          <div className="scvTokenContent card2">
            <p className="scvTokenDes LongDes">
              Rewards of Guard-man who takes responsibility for checking the
              results of miners, checkers and CEs.
            </p>
          </div>
          <div className="scvTokenContent card3">
            <p className="scvTokenDes">Fee to become checkers or miners</p>
          </div>
          <div className="scvTokenContent card4">
            <p className="scvTokenDes">Fee for viewing CV content</p>
          </div>
          <div className="scvTokenContent card5">
            <p className="scvTokenDes">Fee for sercuring Smart CV ledger</p>
          </div>
        </div>
      </div>

      <div className="teamList">
        <h1 style={{ textAlign: 'center', fontSize: '50px' }}>Our Team</h1>
        <Slider {...settings}>
          {MemberListData.map(MenuList => (
            <MemberList
              name={MenuList.name}
              position={MenuList.position}
              image={MenuList.image}
            />
          ))}
        </Slider>
      </div>

      {/* Partners */}
      <div className="partners">
        <h1
          style={{ textAlign: 'center', fontSize: '50px', fontWeight: '700' }}
        >
          Partners
        </h1>
        <div className="partnersInfo">
          <div className="partnerNear">
            <Image src={PartnerNear} />
          </div>
          <div className="partnerOctopus">
            <Image src={PartnerOctopus}></Image>
          </div>
        </div>
      </div>
    </div>
  )
}
