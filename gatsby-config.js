module.exports = {
  siteMetadata: {
    title: `Neil Carruthers`,
    description: `personal web design portfolio website of Neil Carruthers`,
    author: `Neil Carruthers`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Web Design Portfolio of Neil Carruthers`,
        short_name: `Neil Carruthers`,
        start_url: `/`,
        background_color: `#259662`,
        theme_color: `#259662`,
        display: `minimal-ui`,
        icon: `src/images/index/logo512.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
