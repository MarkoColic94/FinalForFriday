import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout' 
import NavigationWrapper from '../components/NavigationWrapper'
import Menu from '../components/menu'
import './landing.css'
import MobileNavWrapper from '../components/MobileNavWrapper'
import HamburgerMenu from '../components/HamburgerMenu'
import MobileCtas from '../components/MobileCtas'
import HeroSection from '../components/HeroSection'
import KeyFacts from '../components/KeyFacts'
import IconsSection from '../components/IconsSection'
import SkillsWrapper from '../components/SkillsWrapper'
import Testimonial from '../components/Testimonial'
import About from '../components/About'
import CareerSection from '../components/CareerSection'
import StartEnquiry from '../components/StartEnquiry'
import AboutBrunel from '../components/AboutBrunel'
import Logos from '../components/Logos'
import Form from '../components/Form'

class LandingTemplate extends React.Component {
    state = {
        message : "",
        form : "IA200364"
    }
    receiveh3 = (h3data) => {
        console.log("h3data",h3data)
        this.setState({
            message: h3data
        })
    }
    receiveData = (data) => {
        this.setState({
            form: data
        })
    }
    render() {
    return (
    <>
        <NavigationWrapper>
          <Menu  
          menu1="COURSE CONTENT"
          menu2="PATHWAYS"
          menu3="COURSE TUTOR"
          menu4="LEARNING OUTCOMES"
          />
        </NavigationWrapper>
        <MobileNavWrapper>
            <HamburgerMenu/>
        </MobileNavWrapper>
        <MobileCtas  />
        <HeroSection
        passDataOnClick={this.receiveData}
        passH3OnClick={this.receiveh3}
         />
        <KeyFacts />
        <IconsSection />
        <SkillsWrapper />
        <Testimonial />
        <About />
        <CareerSection />
        <StartEnquiry />
        <AboutBrunel />
        <Logos />
        <Form 
        Receivedh3={this.state.message} 
        />
  </>
  )
}
}
export default LandingTemplate

export const query = graphql`
  query LandingTemplate($id: String!) {
    strapiLanding(id: {eq: $id}) {
      Title
      Subheader
      Image {
          childImageSharp {
            fixed(width: 200, height: 125) {
              ...GatsbyImageSharpFixed
            }
          }
        }
    }
  }
`