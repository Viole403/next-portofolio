/** @type {import('next').NextConfig} */
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

const nextConfig = {
  // compiler: {
  //   removeConsole: {
  //     exclude: ['error', 'warn'],
  //     production: true,
  //   },
  // },
  eslint: {
    dirs: ['src'],
    ignoreDuringBuilds: true,
  },
  // rewrites: async () => [
  // {
  //   source: '/blog/:path*',
  //   destination: '/:path*',
  //   has: [
  //     {
  //       type: 'host',
  //       value: 'blog.masalief.my.id',
  //     },
  //   ],
  // },
  // {
  //   source: '/en/blog/',
  //   destination: '/blog/*',
  // },
  // ],
  // i18n: {
  //   locales: ['id', 'en'],
  //   defaultLocale: 'id',
  //   // localeDetection: false,
  //   ignoreRoutes: ['/_next/', '/api/', '/blog/'],
  // },
  // trailingSlash: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn-images-1.medium.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  devIndicators: {
    buildActivityPosition: 'bottom-right',
  },
};

// module.exports = nextConfig;
export default withNextIntl(nextConfig);
