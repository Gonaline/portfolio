const express = require("express");
const passport = require("passport");

const {
  ItemController,
  Project1Controller,
  Project2Controller,
  Project3ProductController,
  Project3CategoryController,
  Project3ProductByCategoryController,
  Project3ColorsByProductController,
  Project3Colors2ByProductController,
  Project3OptionByProductController,
  PageController,
  UserController,
  AuthController,
} = require("./controllers");

const { validateUser } = require("./service/validator");

const router = express.Router();

router.get("/items", ItemController.browse);
router.get("/items/:id", ItemController.read);
router.put("/items/:id", ItemController.edit);
router.post("/items", ItemController.add);
router.delete("/items/:id", ItemController.delete);

router.get("/project1", Project1Controller.browse);
router.get("/project1/:id", Project1Controller.read);
router.put("/project1/:id", Project1Controller.edit);
router.post("/project1", Project1Controller.add);
router.delete("/project1/:id", Project1Controller.delete);

router.get("/project2", Project2Controller.browse);
router.get("/project2/:id", Project2Controller.read);
router.put("/project2/:id", Project2Controller.edit);
router.post("/project2", Project2Controller.add);
router.delete("/project2/:id", Project2Controller.delete);

router.get("/p3product", Project3ProductController.browse);
router.get("/p3product/:id", Project3ProductController.read);
router.put("/p3product/:id", Project3ProductController.edit);
router.post("/p3product", Project3ProductController.add);
router.delete("/p3product/:id", Project3ProductController.delete);

router.get("/p3category", Project3CategoryController.browse);
router.get("/p3category/:id", Project3CategoryController.read);
router.put("/p3category/:id", Project3CategoryController.edit);
router.post("/p3category", Project3CategoryController.add);
router.delete("/p3category/:id", Project3CategoryController.delete);

router.get("/p3productbycategory", Project3ProductByCategoryController.browse);
router.get(
  "/p3productbycategory/:id",
  Project3ProductByCategoryController.read
);

router.get("/p3colorsbyproduct", Project3ColorsByProductController.browse);
router.get("/p3colorsbyproduct/:id", Project3ColorsByProductController.read);

router.get("/p3colors2byproduct/:id", Project3Colors2ByProductController.read);
router.get("/p3optionbyproduct/:id", Project3OptionByProductController.read);

router.get("/page", PageController.browse);
router.get("/page/:id", PageController.read);
router.put("/page/:id", PageController.edit);
router.post("/page", PageController.add);
router.delete("/page/:id", PageController.delete);

router.post("/auth/signup", validateUser, AuthController.signup);
router.post(
  "/auth/login",
  passport.authenticate("local", { session: false }),
  AuthController.login
);

router.get(
  "/users",
  // passport.authenticate("jwt", { session: false }),
  UserController.browse
);
router.get(
  "/users/:id",
  // passport.authenticate("jwt", { session: false }),
  UserController.read
);
router.put(
  "/users/:id",
  validateUser,
  // passport.authenticate("jwt", { session: false }),
  UserController.edit
);
router.delete(
  "/users/:id",
  // passport.authenticate("jwt", { session: false }),
  UserController.delete
);

module.exports = router;
