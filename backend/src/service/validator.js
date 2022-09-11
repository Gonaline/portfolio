const Joi = require("joi");

const userSchema = Joi.object({
  email: Joi.string().email().max(255).required(),
  password: Joi.string().max(255).required(),
  firstname: Joi.string().max(45).required(),
  lastname: Joi.string().max(45).required(),
});

const validateUser = (req, res, next) => {
  const { firstname, lastname, email, password } = req.body;

  const { error } = userSchema.validate(
    { firstname, lastname, email, password },
    { abortEarly: false }
  );

  if (error) {
    res.status(422).json({ validationErrors: error.details });
  } else {
    next();
  }
};

module.exports = {
  validateUser,
};
