/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "Coronavírus - Rio Grande do Sul",
    siteUrl: "https://coronavirus-rs.netlify.com",
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
        background_color: "#141414",
        theme_color: "#695086",
        display: "standalone",
        icon: "static/logo.png"
      },
    },
    {
      resolve: "gatsby-plugin-nprogress",
      options: {
        color: "#695086",
      },
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-160838753-1",
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
