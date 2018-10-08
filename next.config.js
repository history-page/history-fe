const withCSS = require('@zeit/next-css')
module.exports = {
  ...withCSS({
    cssModules: true,
    cssLoaderOptions: {
      importLoaders: 1,
      localIdentName: '[local]___[hash:base64:5]'
    }
  }),
  publicRuntimeConfig: {
    PRODUCT_AUTHOR: process.env.PRODUCT_AUTHOR,
    PRODUCT_NAME: process.env.PRODUCT_NAME,
    PRODUCT_HOST: process.env.PRODUCT_HOST,
    FACEBOOK_APP_ID: process.env.FACEBOOK_APP_ID,
    LOGO_URL_800H: process.env.LOGO_URL_800H
  }
}
