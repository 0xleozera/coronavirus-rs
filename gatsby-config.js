/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

const theme = require("./src/assets/themes/main");

module.exports = {
  siteMetadata: {

    title: "Coronavírus - Rio Grande do Sul",
    siteUrl: "https://github.com/leonardorpr",
    description: "Estatísticas de casos de Coronavírus no estado do Rio Grande do Sul.",
    author: "@leonardo_rpr"
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Coronavírus - Rio Grande do Sul",
        short_name: "Coronavírus - RS",
        start_url: "/",
        background_color: theme.colors.primary,
        theme_color: theme.colors.secondary,
        display: "standalone",
        icon: "static/logo.png"
      },
    },
    {
      resolve: "gatsby-plugin-nprogress",
      options: {
        color: theme.colors.secondary,
      },
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "IU-000",
      },
    },
    {
      resolve: "gatsby-plugin-styled-components",
      options: {
        displayName: process.env.NODE_ENV !== "production",
      },
    },
    {
      resolve: "gatsby-plugin-page-creator",
      options: {
        path: `${__dirname}/src/pages`,
        ignore: ["**/styles.js"],
      },
    },
    "gatsby-plugin-offline",
  ]
}
