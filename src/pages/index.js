import React from "react"
import {graphql } from "gatsby"
import styled from 'styled-components';

import Layout from "../components/layout"
import Seo from "../components/seo"
import Projects from '../components/projects';
import ContactForm from '../components/contact-form';


const Header = styled.h2`
  font-weight: 800;

  @media screen and (max-width: 800px) {
    text-align: center;
  }
`;

const IndexPage = ({data}) => {

  return (
  <Layout>
    <Seo title="Home" />
    <div>
      <Header>Featured Projects</Header>
      <Projects data={data} featured />
      <Header>Other Projects</Header>
      <Projects data={data} />
    </div>
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