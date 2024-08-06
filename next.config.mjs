/** @type {import('next').NextConfig} */

import withYaml from 'next-plugin-yaml';

const nextConfig = withYaml({
  reactStrictMode: true,
});

export default nextConfig;
