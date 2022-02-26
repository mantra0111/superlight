// require('dotenv').config({path:"contentful.env"})

// const { 
//   access_token : accessToken, 
//   space_id : spaceId } = process.env

module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "mantra-portfolio",
  },
  plugins: [
    // {
    //   resolve: "gatsby-source-contentful",
    //   options: {
    //     accessToken,
    //     spaceId,
    //   },
    // },
  ],
};
