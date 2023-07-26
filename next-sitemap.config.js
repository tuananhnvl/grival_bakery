/** @type {import('next-sitemap').IConfig} */
const nextConfig = {
    siteUrl: process.env.NEXT_PUBLIC_DOMAIN_HOST,
    generateRobotsTxt: true, // (optional)
    transform: async(config, path) => {
      // config: object chứa các cài đặt mặc định của next-sitemap
      // path: đường dẫn của trang đang được transform
      return {
        loc: path,
        priority: path === '/' ? 1 : 0.8,
        changefreq: config.changefreq,
        lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
        alternateRefs: config.alternateRefs ?? [],
      }
    }
  }


module.exports = nextConfig
