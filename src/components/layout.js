/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"

// import Header from "./header"
import Masthead from './header/header.component';
import "./layout.css" // global styles
import styled from 'styled-components';




const BodyContainer = styled.div`
  margin: 0 auto;
  padding: 0;
`;

const FooterContainer = styled.footer`
  padding: 2rem;
  font-weight: 700;
`;


const Layout = ({ children }) => {


  return (
    <>
      {/* <Header siteTitle={data.site.siteMetadata?.title || `Title`} /> */}
      <Masthead />
      <BodyContainer>
        <main>{children}</main>
        <FooterContainer>
          <div>
            © {new Date().getFullYear()} Neil Carruthers
          </div>
        </FooterContainer>
      </BodyContainer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
