// In your gatsby-config.js file
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
console.log(process.env.GATSBY_SANITY_PROJECT_ID)
module.exports = {
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: "6bhvu0u2",
        dataset: "production",
      },
    },
  ] /* Your site config here */,
}
