require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: 'Profile of Naoto Koyama',
    description:
      'Welcome to Naoto Koyama Profile. 児山直人のプロフィールサイトへようこそ',
    author: '@naoto.koyama',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/avatar.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        data: '@import "./src/assets/scss/foundation/_mixin.scss";',
      },
    },
    {
      resolve: 'gatsby-plugin-graphql-codegen',
      options: {
        fileName: 'types/graphql-types.d.ts',
      },
    },
    {
      resolve: 'gatsby-plugin-eslint',
      options: {
        test: /\.js$|\.jsx$|\.ts$|\.tsx$/,
        exclude: /(node_modules|.cache|public)/,
        stages: ['develop'],
        options: {
          emitWarning: true,
          failOnError: true,
        },
      },
    },
    'gatsby-plugin-twitter',
    {
      resolve: 'gatsby-source-microcms',
      options: {
        apiKey: process.env.GATSBY_MICRO_CMS_API_KEY,
        serviceId: 'profile-koyama',
        endpoint: 'userinfo',
        format: 'object',
      },
    },
    {
      resolve: 'gatsby-source-microcms',
      options: {
        apiKey: process.env.GATSBY_MICRO_CMS_API_KEY,
        serviceId: 'profile-koyama',
        endpoint: 'skills',
      },
    },
    {
      resolve: 'gatsby-source-microcms',
      options: {
        apiKey: process.env.GATSBY_MICRO_CMS_API_KEY,
        serviceId: 'profile-koyama',
        endpoint: 'careers',
      },
    },
    {
      resolve: 'gatsby-source-microcms',
      options: {
        apiKey: process.env.GATSBY_MICRO_CMS_API_KEY,
        serviceId: 'profile-koyama',
        endpoint: 'hobbies',
      },
    },
    {
      resolve: 'gatsby-source-microcms',
      options: {
        apiKey: process.env.GATSBY_MICRO_CMS_API_KEY,
        serviceId: 'profile-koyama',
        endpoint: 'otherskills',
        readAll: true,
      },
    },
  ],
}
