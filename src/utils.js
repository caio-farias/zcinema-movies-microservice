require('dotenv/config')

module.exports = {
  isDevEnviroment() {
    return process.env.NODE_ENV === 'development'
  },
}