module.exports = {
  siteName: 'TEST',
  siteDescription: 'Gridsome Blog',
  templates: {
    Post: '/blog/:title',
  },
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'content/posts/*.md',
        typeName: 'Post',
      }
    }
  ]
}