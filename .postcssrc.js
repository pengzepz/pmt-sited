// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  "plugins": {
    // to edit target browsers: use "browserslist" field in package.json
    "autoprefixer": {},
    'postcss-plugin-px2rem': {
      "rootValue": 37.5
      // "rootValue": 75
    }
  }
}
