import React from 'react'
import ContainerLanding from './Container/Container'
import HeaderLanding from './HeaderLandingPage/HeaderLanding'
import Footer from './Footer/Footer'

export default function LandingPage() {
  return (
    <div>
      <HeaderLanding />
      <ContainerLanding />
      <Footer />
    </div>
  )
}
