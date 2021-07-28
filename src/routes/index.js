const router = require("express").Router();

module.exports = {
  info: require('./info/info'),
  transaction: require('./transaction/transaction'),
  payment: require('./payment/payment'),
  acount: require('./createWallet/acount'),
  stripe: require('./stripe/stripe'),
  federation: require('./federation/federation'),
  transactions: require('./transactions/transactions'),
  authentication: require('./jesonWebToken/jwt'),
  toml: require("./toml/toml"),
  whatsapp: require("./whatsapp/whatsapp"),
  index: router,
  emails: require("./emails/emails"),
  invite: require("./invite/invite"),
  upload: require("./validateDni/validateDni")
};