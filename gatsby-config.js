require('dotenv').config({path:"contentful.env"})

const { 
  access_token : accessToken, 
  space_id : spaceId } = process.env


console.log(`accessToken ${accessToken}, space id ${spaceId}`)

module.exports = {
  pathPrefix: "/blog",
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "mantra-portfolio",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken,
        spaceId,
      },
    },
    "gatsby-plugin-image"
  ],
};
