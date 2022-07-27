-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema portfolio
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema portfolio
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `portfolio` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `portfolio` ;

-- -----------------------------------------------------
-- Table `portfolio`.`p3category`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `portfolio`.`p3category` (
  `id` INT NOT NULL,
  `categoryName` VARCHAR(45) NOT NULL,
  `categoryImg` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `portfolio`.`p3color`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `portfolio`.`p3color` (
  `id` INT NOT NULL,
  `name` VARCHAR(96) NOT NULL,
  `img` VARCHAR(96) NOT NULL,
  `order` INT NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `portfolio`.`p3option`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `portfolio`.`p3option` (
  `id` INT NOT NULL,
  `optionName` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `portfolio`.`p3optiondetail`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `portfolio`.`p3optiondetail` (
  `id` INT NOT NULL,
  `optionDetailName` VARCHAR(45) NULL DEFAULT NULL,
  `codeImg` VARCHAR(12) NULL DEFAULT NULL,
  `option_id` INT NOT NULL,
  `optionCost` INT NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_project3optiondetail_project3option_idx` (`option_id` ASC) VISIBLE,
  CONSTRAINT `fk_project3optiondetail_project3option`
    FOREIGN KEY (`option_id`)
    REFERENCES `portfolio`.`p3option` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `portfolio`.`p3option_has_optiondetail`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `portfolio`.`p3option_has_optiondetail` (
  `option_id` INT NOT NULL,
  `optiondetail_id` INT NOT NULL,
  PRIMARY KEY (`option_id`, `optiondetail_id`),
  INDEX `fk_p3option_has_p3optiondetail_p3optiondetail1_idx` (`optiondetail_id` ASC) VISIBLE,
  INDEX `fk_p3option_has_p3optiondetail_p3option1_idx` (`option_id` ASC) VISIBLE,
  CONSTRAINT `fk_p3option_has_p3optiondetail_p3option1`
    FOREIGN KEY (`option_id`)
    REFERENCES `portfolio`.`p3option` (`id`),
  CONSTRAINT `fk_p3option_has_p3optiondetail_p3optiondetail1`
    FOREIGN KEY (`optiondetail_id`)
    REFERENCES `portfolio`.`p3optiondetail` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `portfolio`.`p3product`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `portfolio`.`p3product` (
  `id` VARCHAR(8) NOT NULL,
  `name` VARCHAR(96) NOT NULL,
  `introduction` VARCHAR(400) NOT NULL,
  `textSize` VARCHAR(300) NOT NULL,
  `mirror` TINYINT NOT NULL,
  `ftNumber` INT NOT NULL,
  `price` INT NOT NULL,
  `priceOption` INT NULL DEFAULT NULL,
  `fixedColor` VARCHAR(45) NULL DEFAULT NULL,
  `colorChoiceNumber` INT NULL DEFAULT NULL,
  `photoNumber` INT NULL DEFAULT NULL,
  `option_Id` INT NULL DEFAULT NULL,
  `mainCategory_id` INT NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `cat_idx` (`mainCategory_id` ASC) VISIBLE,
  CONSTRAINT `mainCategory_id`
    FOREIGN KEY (`mainCategory_id`)
    REFERENCES `portfolio`.`p3category` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `portfolio`.`p3product_has_category`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `portfolio`.`p3product_has_category` (
  `category_id` INT NOT NULL,
  `product_id` VARCHAR(8) NOT NULL,
  PRIMARY KEY (`category_id`, `product_id`),
  INDEX `fk_p3category_has_p3product_p3product1_idx` (`product_id` ASC) VISIBLE,
  INDEX `fk_p3category_has_p3product_p3category1_idx` (`category_id` ASC) VISIBLE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `portfolio`.`p3product_has_color`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `portfolio`.`p3product_has_color` (
  `product_id` VARCHAR(8) NOT NULL,
  `color_id` INT NOT NULL,
  PRIMARY KEY (`product_id`, `color_id`),
  INDEX `fk_p3product_has_p3colorgroup_p3colorgroup1_idx` (`color_id` ASC) VISIBLE,
  INDEX `fk_p3product_has_p3colorgroup_p3product1_idx` (`product_id` ASC) VISIBLE,
  CONSTRAINT `fk_p3product_has_p3colorgroup_p3product1`
    FOREIGN KEY (`product_id`)
    REFERENCES `portfolio`.`p3product` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `portfolio`.`p3product_has_color2`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `portfolio`.`p3product_has_color2` (
  `product_id` VARCHAR(8) NOT NULL,
  `color_id` INT NOT NULL,
  PRIMARY KEY (`product_id`, `color_id`),
  INDEX `fk_p3product_has_p3color_p3color1_idx` (`color_id` ASC) VISIBLE,
  INDEX `fk_p3product_has_p3color_p3product1_idx` (`product_id` ASC) VISIBLE,
  CONSTRAINT `fk_p3product_has_p3color_p3color1`
    FOREIGN KEY (`color_id`)
    REFERENCES `portfolio`.`p3color` (`id`),
  CONSTRAINT `fk_p3product_has_p3color_p3product1`
    FOREIGN KEY (`product_id`)
    REFERENCES `portfolio`.`p3product` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `portfolio`.`p3product_has_option`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `portfolio`.`p3product_has_option` (
  `option_id` INT NOT NULL,
  `product_id` VARCHAR(8) NOT NULL,
  PRIMARY KEY (`option_id`, `product_id`),
  INDEX `fk_p3option_has_p3product_p3product1_idx` (`product_id` ASC) VISIBLE,
  INDEX `fk_p3option_has_p3product_p3option1_idx` (`option_id` ASC) VISIBLE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `portfolio`.`page`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `portfolio`.`page` (
  `id` VARCHAR(16) NOT NULL,
  `subtitle` VARCHAR(45) NULL DEFAULT NULL,
  `title` VARCHAR(45) NOT NULL,
  `description` TEXT NULL DEFAULT NULL,
  `projectNumber` INT NULL DEFAULT NULL,
  `color1` VARCHAR(45) NOT NULL,
  `color2` VARCHAR(45) NOT NULL,
  `color3` VARCHAR(45) NULL DEFAULT NULL,
  `color4` VARCHAR(45) NULL DEFAULT NULL,
  `color5` VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `portfolio`.`project1`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `portfolio`.`project1` (
  `id` VARCHAR(16) NOT NULL,
  `message` VARCHAR(40) NOT NULL,
  `userPoint` INT NULL DEFAULT NULL,
  `computerPoint` INT NULL DEFAULT NULL,
  PRIMARY KEY (`id`, `message`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `portfolio`.`project2`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `portfolio`.`project2` (
  `id` INT NOT NULL,
  `img` VARCHAR(32) NOT NULL,
  `alt` VARCHAR(45) NOT NULL,
  `text` VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `img_UNIQUE` (`img` ASC) VISIBLE,
  UNIQUE INDEX `alt_UNIQUE` (`alt` ASC) VISIBLE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
