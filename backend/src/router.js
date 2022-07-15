const express = require("express");

const {
  ItemController,
  Project1Controller,
  Project2Controller,
  Project3ProductController,
  Project3CategoryController,
  PageController,
} = require("./controllers");

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

router.get("/page", PageController.browse);
router.get("/page/:id", PageController.read);
router.put("/page/:id", PageController.edit);
router.post("/page", PageController.add);
router.delete("/page/:id", PageController.delete);

module.exports = router;
