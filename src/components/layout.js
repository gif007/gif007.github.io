/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css" // global styles
import styled from 'styled-components';

import GitHubLogo from '../images/GitHub-Mark-32px.png';


const BodyContainer = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 0 1.0875rem 1.45rem;
`;

const FooterContainer = styled.footer`
  margin-top: 2rem;
`;

const ImageContainer = styled.span`
  margin-right: 1rem;
`;

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <BodyContainer>
        <main>{children}</main>
        <FooterContainer>
          <ImageContainer>
            <a href='https://github.com/gif007'>
              <img src={GitHubLogo} alt='GitHub icon'/>
            </a>
          </ImageContainer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </FooterContainer>
      </BodyContainer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
