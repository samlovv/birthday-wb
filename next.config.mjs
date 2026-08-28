/** @type {import('next').NextConfig} */
const basePath = process.env.GITHUB_ACTIONS ? "/birthday-wb" : "";
const nextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
  images: { unoptimized: true }
};
export default nextConfig;
