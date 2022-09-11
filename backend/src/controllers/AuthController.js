const argon2 = require("argon2");
const jwt = require("jsonwebtoken");
const models = require("../models");

const hashingOptions = require("../service/hashingOptions");

class AuthController {
  static signup = async (req, res) => {
    const user = req.body;
    user.password = await argon2.hash(user.password, hashingOptions);
    models.user
      .insert(user)
      .then(([result]) => {
        user.id = result.insertId;
        delete user.password;
        const token = jwt.sign(user, process.env.JWT_SECRET);
        res.status(201).send({ user, token });
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static login = (req, res) => {
    const token = jwt.sign(req.user, process.env.JWT_SECRET);
    res.status(200).json({ user: req.user, token });
  };
}

module.exports = AuthController;
