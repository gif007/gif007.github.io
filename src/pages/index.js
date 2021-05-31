import React from "react"
import {graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Projects from '../components/projects';
import ContactForm from '../components/contact-form';


const IndexPage = ({data}) => {

  return (
  <Layout>
    <Seo title="Home" />
      <Projects data={data} featured />
      <Projects data={data} />
    <ContactForm />
  </Layout>
)}

export default IndexPage

export const query = graphql`
  query HomePageQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          html
          frontmatter {
            title
            featured
            date
            liveURL
            codeURL
          }
          excerpt(truncate: false, pruneLength: 175)
        }
      }
      totalCount
    }
  }
`;