const logger = require('./logger/logger')
const crypto = require('./crypto/crypto')
const consola = require('./consola/readPassword')

module.exports = {
    logger: logger,
    crypto: crypto,
    consola: consola
}