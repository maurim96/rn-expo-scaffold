const path = require("path");
const createExpoWebpackConfigAsync = require("@expo/webpack-config");

module.exports = async function (env, argv) {
  const config = await createExpoWebpackConfigAsync(
    {
      ...env,
      babel: {
        dangerouslyAddModulePathsToTranspile: ["nativewind"],
      },
    },
    argv
  );

  config.module.rules.push({
    test: /\.css$/i,
    use: ["postcss-loader"],
  });

  config.resolve.fallback = {
    ...(config.resolve.fallback || {}),
    "crypto": require.resolve("crypto-browserify"),
    "stream": require.resolve("stream-browserify"),
  };

  return config;
};