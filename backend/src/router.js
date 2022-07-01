const express = require("express");

const {
  ItemController,
  Project1Controller,
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

router.get("/page", PageController.browse);
router.get("/page/:id", PageController.read);
router.put("/page/:id", PageController.edit);
router.post("/page", PageController.add);
router.delete("/page/:id", PageController.delete);

module.exports = router;
