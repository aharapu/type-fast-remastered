/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-sass`,
    // {
    //   resolve: "gatsby-plugin-sass",
    //   options: {
    //     precision: 8,
    //     data: `@import "${__dirname}/src/styles/variables.scss";`,
    //   },
    // },
    "gatsby-transformer-typescript-css-modules",
  ],
}
