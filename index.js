const { join } = require('path')
const QuickgRPC = require('quick-grpc')
const _ = require('lodash')

class OakPlatform {
  constructor (opts = {}) {
    return (async () => {
      opts = _.defaults(opts, {
        basePath: join(__dirname, 'platform-protos')
      })  
      let instance = await new QuickgRPC(opts)
      return instance
    })()
  }
}

module.exports = OakPlatform