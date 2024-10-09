module.exports = {
  siteUrl: 'greatthinkconstruction.com/',
  generateIndexSitemap: false,
  exclude: ['/server-sitemap.xml'],
  robotsTxtOptions: {
    additionalSitemaps: [
      `greatthinkconstruction.com/server-sitemap.xml`,
    ],
  },
}