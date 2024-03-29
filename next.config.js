module.exports = {
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      "/": { page: "/" },
      "/about": { page: "/about" },
      "/contact": { page: "/contact" },
      "/services": { page: "/services" },
      "/mission-vision": { page: "/mission-vision" },
      //   "/p/hello-nextjs": { page: "/post", query: { title: "hello-nextjs" } },
      //   "/p/learn-nextjs": { page: "/post", query: { title: "learn-nextjs" } },
      //   "/p/deploy-nextjs": { page: "/post", query: { title: "deploy-nextjs" } },
    };
  },
  trailingSlash: true,
};
