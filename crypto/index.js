const dotenv = require("dotenv");
const path = require("path");

dotenv.config({
    path: path.resolve(process.env.npm_config_local_prefix, ".env/" + (process.env.NODE_ENV||'development') + ".env"),
});

const cmd = require('../consola/readPassword')
const crypto = require('./crypto')
const pass = cmd.readPassword(crypto.encrypt);