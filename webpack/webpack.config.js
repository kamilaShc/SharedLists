// This file created to merge webpack.common with either dev or prod file

const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common.js");

// envVars => dev or prod
module.exports = (envVars) => {
  const { env } = envVars;
  const envConfig = require(`./webpack.${env}.js`);
  const config = merge(commonConfig, envConfig);
  return config;
};
