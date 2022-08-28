const argon2 = require("argon2");
const models = require("../models");

const hashingOptions = {
  type: argon2.argon2id,
  memoryCost: 2 ** 16,
  timeCost: 5,
  parallelism: 1,
};

class AuthController {
  static signup = async (req, res) => {
    const user = req.body;
    const userEmail = user.email;
    const regexEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/;

    if (userEmail.match(regexEmail)) {
      user.password = await argon2.hash(user.password, hashingOptions);
      models.user
        .insert(user)
        .then(([result]) => {
          user.id = result.insertId;
          delete user.password;
          res.status(201).send({ user });
        })
        .catch((err) => {
          console.error(err);
          res.sendStatus(500);
        });
    } else {
      res.status(400).send("Email incorrect");
    }
  };

  static login = (req, res) => {
    const { email, password } = req.body;
    models.user.findByEmail(email).then(([result]) => {
      const user = result[0];
      if (!user) res.status(401).send("Invalid credentials");
      else {
        const hashedPassword = user.password;
        argon2
          .verify(hashedPassword, password, hashingOptions)
          .then((passwordIsCorrect) => {
            if (passwordIsCorrect) {
              res.status(201).send("Password is ok");
            } else {
              res.status(401).send("Invalid credentials");
            }
          });
      }
    });
  };
}

module.exports = AuthController;
