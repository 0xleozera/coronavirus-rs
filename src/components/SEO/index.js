import React from "react"
import Helmet from "react-helmet"

import theme from "../../assets/themes/main";

import { useStaticQuery, graphql } from "gatsby"

const SEO = ({ lang = "en", meta = [] }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  return (
    <>
      <Helmet
        htmlAttributes={{
          lang,
        }}
        title={site.siteMetadata.title}
        titleTemplate={`%s | ${site.siteMetadata.title}`}
        meta={[
          {
            name: "description",
            content: site.siteMetadata.description,
          },
          {
            property: "og:title",
            content: site.siteMetadata.title,
          },
          {
            property: "og:description",
            content: site.siteMetadata.description,
          },
          {
            property: "og:image",
            content: "/logo.png",
          },
          {
            property: "og:type",
            content: "website",
          },
          {
            name: "twitter:card",
            content: "summary",
          },
          {
            name: "twitter:creator",
            content: site.siteMetadata.author,
          },
          {
            name: "twitter:title",
            content: site.siteMetadata.title,
          },
          {
            name: "twitter:description",
            content: site.siteMetadata.description,
          },
        ].concat(meta)}
      />
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css?family=Montserrat:400,900&display=swap"
          rel="stylesheet"
        />
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileColor" content={theme.colors.secondary} />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content={theme.colors.secondary} />
      </Helmet>
    </>
  )
}

export default SEO