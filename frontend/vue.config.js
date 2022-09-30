const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: process.env.VUE_APP_API_URL === 'production',
});
