export default {
  base: "/",
  build: {
    rollupOptions: {
      output: {
        assetFileNames: "[name].[hash].[ext]",
        chunkFileNames: "[name].[hash].js",
        entryFileNames: "[name].js",
      },
    },
  },
};
