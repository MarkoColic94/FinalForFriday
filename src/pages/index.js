import React from "react"
import { Link, graphql } from "gatsby"
import Img from 'gatsby-image'
import Menu from '../components/Menu'
import NavigationWrapper from '../components/NavigationWrapper'
import Layout from "../components/layout"
import Header from "../components/header"
import PropTypes from "prop-types"
import Footer from '../components/Footer'
import CourseCard from '../components/CourseCard'

const IndexPage = ({ data }) => (
  <>
  <Header>
    <NavigationWrapper>
      <Menu 
      menu1="WELCOME"
      menu2="LANDING PAGES"
      menu3="WEBINARS"
      menu4="THANK YOU"
      />
    </NavigationWrapper>
  </Header>
  <Layout>
    <ul>
      {data.allStrapiLanding.edges.map(document => (
        <CourseCard
        keyprop={document.node.id}
        Link={document.node.id}
        Title={document.node.Title}
        Image={document.node.Image.childImageSharp.fixed}
        Subheader={document.node.Subheader}
        />
      ))}
    </ul>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
  <Footer  />
  </>
)

export default IndexPage


export const pageQuery = graphql`
  query IndexQuery {
    allStrapiLanding {
      edges {
        node {
            id
            Image {
              childImageSharp {
                fixed(width:300,height:125) {
                  ...GatsbyImageSharpFixed
                }
              }
            } 
            Title
            Subheader
        }
      }
    }
  }
`
