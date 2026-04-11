/** @type {import('next').NextConfig} */
const nextConfig = {
  // Compiler off: smaller client bundles / less main-thread work in lab (re-enable if you rely on it).
  reactCompiler: false,
};

export default nextConfig;
