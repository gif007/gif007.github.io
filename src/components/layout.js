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
import Masthead from './masthead/masthead.component';
import "./layout.css" // global styles
import styled from 'styled-components';




const BodyContainer = styled.div`
  margin: 0 auto;
  padding: 0;
`;

const FooterContainer = styled.footer`
  margin-top: 2rem;
`;



const Copy = styled.div`
  margin-top: 1rem;
`;

const Layout = ({ children }) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  return (
    <>
      {/* <Header siteTitle={data.site.siteMetadata?.title || `Title`} /> */}
      <Masthead />
      <BodyContainer>
        <main>{children}</main>
        <FooterContainer>
          <span>Footer</span>
          <Copy>
            © {new Date().getFullYear()} Neil Carruthers
          </Copy>
          <a href='/#top'>Back to Top</a>
        </FooterContainer>
      </BodyContainer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
