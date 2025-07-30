/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://natrajtoursandtravels.vercel.app',
  generateRobotsTxt: true,
  changefreq: 'monthly',
  priority: 0.7,
  sitemapSize: 5000,
  exclude: [], // you can exclude paths like /admin etc
};
