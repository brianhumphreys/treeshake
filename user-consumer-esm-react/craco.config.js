module.exports = {
  webpack: {
    mode: "production",
    module: {
      rules: [
        {
          test: /\.(js)$/,
          include: "/node_modules/user-library-rollup-lit",
          sideEffects: true,
        },
      ],
    },
  }
}