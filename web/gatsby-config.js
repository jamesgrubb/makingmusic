// In your gatsby-config.js file
require("dotenv").config({
  path: `.env.${process.env}`,
})

/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "Sounds Like",
    description:
      "A compilation of tracks composed and produced by Rupert Gibson",
    author: "James Grubb",
  },
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: "6bhvu0u2",
        dataset: "production",
      },
    },
    `gatsby-plugin-react-helmet`,
  ] /* Your site config here */,
}
