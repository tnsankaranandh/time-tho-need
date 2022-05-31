/** @type {import('next').NextConfig} */
const nextConfig = {
  target: 'serverless',
  reactStrictMode: true,
  env: {
    API_KEY: "blt8acc25df64f80269",
    DELIVERY_TOKEN: "cse6dcef6a446460bfcecf29a3",
    ENVIROMENT_NAME: "development",
    MANAGEMENT_TOKEN: "cs15801595a2ab6e4e058e05be",
  },
  compiler: {
    styledComponents: true,
  },
  flags: {
    DEV_SSR: false,
  },
};

module.exports = nextConfig;
