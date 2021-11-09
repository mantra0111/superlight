module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "mantra-portfolio",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: "\u0016",
        spaceId: "",
      },
    },
  ],
};
