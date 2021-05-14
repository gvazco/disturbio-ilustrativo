module.exports = {
  siteMetadata: {
    title: "Disturbio Ilustrativo",
  },
  plugins: [
    {
      resolve: "gatsby-source-wordpress",
      options: {
        url: "https://disturbio-gatsby.disturbioilustrativo.com/graphql",
      },
    },
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};