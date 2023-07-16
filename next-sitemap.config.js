/** @type {import('next-sitemap').IConfig} */
const nextConfig = {
    siteUrl: process.env.NEXT_PUBLIC_DOMAIN_HOST,
    generateRobotsTxt: true, // (optional)
    // ...other options
  }


module.exports = nextConfig
