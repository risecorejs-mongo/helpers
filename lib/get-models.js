const mongoose = require('mongoose')

/**
 * MODELS
 * @return {Object}
 */
module.exports = () => {
 return mongoose.connection.models
}
