const { alias } = require('react-app-rewire-alias')

module.exports = function override(config) {
  alias({
    '@pages': 'src/pages',
    '@images': 'public/img',
    '@store': 'src/store',
    '@shared': 'src/shared',
    '@appConfig': 'config-app.js',
    '@api': 'src/api'
  })(config)

  return config
}
