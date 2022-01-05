/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  basePath: process.env.NODE_ENV === 'production' ? '/next-portfolio' : '/',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/next-portfolio/' : '/',
}
