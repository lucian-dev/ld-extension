let mix = require('laravel-mix');
require('laravel-mix-tailwind');

mix.setPublicPath('dist');

mix.tailwind();
mix.js('src/background/background.js', 'dist/js').js('src/popup/popup.js', 'dist/js').js('src/options/options.js', 'dist/js');
mix.sass('src/styles/main.scss', 'dist/css/main.css').options({
  processCssUrls: false,
});

if (!mix.inProduction()) {
  mix.webpackConfig({
    devtool: 'source-map',
    externals: {
      jquery: 'jQuery',
    },
  });
  mix.sourceMaps();
}
