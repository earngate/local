module.exports = {
  siteMetadata: {
    title: 'Static Fuse',
    description: 'Headless WordPress with Gatsby FTW.',
    author: 'Scott and Justin',
    twitter: '@staticfuse',
    siteUrl: `https://ar.thewebhostdir.com`,
  },
  plugins: [
    {
      resolve: `@meno010/local`,
      options: {
        starterPages: true,
        mailChimpEndpoint: 0,
        dynamicComments: 1,
        gaTrackingId: 0,
        wordPressUrl: `https://thewebhostdir.com/ar`,
        blogURI: '/'
      },
    },
  ],
}