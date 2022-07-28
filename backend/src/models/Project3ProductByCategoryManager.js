const AbstractManager = require("./AbstractManager");

class Project3ProductByCategoryManager extends AbstractManager {
  static table = "p3productbycategory";

  findAll() {
    return this.connection.query(
      `SELECT p.id, p.name, c.categoryName, c.categoryImg, c.id as categoryId
      FROM p3product_has_category AS phc
      INNER JOIN p3product AS p ON p.id=phc.product_id
      INNER JOIN p3category AS c ON c.id = phc.category_id
      ORDER BY p.productOrder;`
    );
  }

  find(id) {
    return this.connection.query(
      `SELECT p.id, p.name, c.categoryName, c.categoryImg, c.id as categoryId
      FROM p3product_has_category AS phc
      INNER JOIN p3product AS p ON p.id=phc.product_id
      INNER JOIN p3category AS c ON c.id = phc.category_id
      WHERE c.id = ? ORDER BY p.productOrder`,
      [id]
    );
  }
}

module.exports = Project3ProductByCategoryManager;
