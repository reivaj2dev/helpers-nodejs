const dotenv = require("dotenv");
const path = require("path");
const crypto = require("crypto");

dotenv.config({
    path: path.resolve(process.env.npm_config_local_prefix, ".env/" + (process.env.NODE_ENV||'development') + ".env"),
})

function encrypt(text) {

  const key = new Buffer.from(crypto.createHash('sha256').update(String(process.env.CRYPTO_PASSWORD)).digest('base64').slice(0, 32));
  const iv = new Buffer.from(crypto.createHash('sha256').update(String(process.env.CRYPTO_VECTOR)).digest('base64').slice(0, 16));
  var cipher = crypto.createCipheriv(process.env.ALGORITHM, key, iv);
  var crypted = cipher.update(text, "utf8", "hex");
  crypted += cipher.final("hex");
  return crypted;

}

function decrypt(text) {
  const key = new Buffer.from(crypto.createHash('sha256').update(String(process.env.CRYPTO_PASSWORD)).digest('base64').slice(0, 32));
  const iv = new Buffer.from(crypto.createHash('sha256').update(String(process.env.CRYPTO_VECTOR)).digest('base64').slice(0, 16));
  var decipher = crypto.createDecipheriv(process.env.ALGORITHM, key, iv);
  var dec = decipher.update(text, "hex", "utf8");
  dec += decipher.final("utf8");
  return dec;
}

module.exports = {
  encrypt: encrypt,
  decrypt: decrypt
};
