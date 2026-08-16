/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  devIndicators: { appIsrStatus: false, buildActivity: false },

  /**
   * Static export. `npm run build` writes a plain folder of HTML, CSS, JS and
   * images to `out/`, which GitHub Pages can serve directly — no Node server.
   * The same output also works on Netlify, Cloudflare Pages or any static host.
   */
  output: "export",

  /**
   * Next's image optimiser needs a running server, which a static export does
   * not have. Our images are already sized and compressed by hand, so there is
   * nothing for it to do.
   */
  images: { unoptimized: true },

  /**
   * Emit `/tests/index.html` rather than `/tests.html`, so links keep working
   * on a static host without server-side rewrites.
   */
  trailingSlash: true,
};

export default nextConfig;
