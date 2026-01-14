/** @type {import('next').NextConfig} */
const repoName = "blue-guard-billing";

const nextConfig = {
  reactStrictMode: false,
  output: "export",

  basePath: `/${repoName}`,
  assetPrefix: `/${repoName}/`,

  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
