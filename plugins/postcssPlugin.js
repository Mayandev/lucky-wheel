// sassPlugin.js
module.exports = ({ onGetWebpackConfig }) => {
  onGetWebpackConfig((config) => {
    config.module
      .rule('postcss')
      .test(/\.css$/)
      .use('style-loader').loader('style-loader').end()
      .use('css-loader').loader('css-loader').end()
      .use('postcss-loader').loader('postcss-loader')
      .options({
        plugins: [require('autoprefixer')]
      })
  });
}