module.exports = ({ onGetWebpackConfig }) => {
  onGetWebpackConfig((config) => {
    config.module
      .rule('postcss')
      .test(/.css$/)
      .use('css')
      .loader(require.resolve('stylesheet-loader'))
      .options({
        transformDescendantCombinator: true,
      })
      .end()
      .use('style-loader')
      .loader('style-loader')
      .end()
      .use('css-loader')
      .loader('css-loader')
      .end()
      .use('postcss-loader')
      .loader('postcss-loader')
      .options({
        plugins: [require('autoprefixer')],
      })
      .end();
  });
}