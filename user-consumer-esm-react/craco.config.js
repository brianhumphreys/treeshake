module.exports = {
    webpack: {
        mode: "production",
        optimization: {
        //     usedExports: true,
        //     innerGraph: true,
            // sideEffects: true,
        //     minimize: false,
        },
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