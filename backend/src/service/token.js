const jwt = require("jsonwebtoken");

// const PRIVATE_KEY = "superSecretStringNowoneShouldKnowOrTheCanGenerateTokens";
const { PRIVATE_KEY } = process.env;

const calculateToken = (userEmail = "") => {
  return jwt.sign({ email: userEmail }, PRIVATE_KEY);
};

module.exports = {
  calculateToken,
};
