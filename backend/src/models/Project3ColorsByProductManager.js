const AbstractManager = require("./AbstractManager");

class Project3ColorsByProduct extends AbstractManager {
  static table = "p3colorsbyproduct";

  findAll() {
    return this.connection.query(
      `SELECT phc.product_id, c.name, c.img, c.order
      FROM p3product_has_color AS phc
      INNER JOIN p3color AS c ON c.id = phc.color_id
      ORDER BY c.order, phc.product_id;`
    );
  }

  find(id) {
    return this.connection.query(
      `SELECT c.name, c.img, phc.product_id FROM p3product_has_color AS phc
      INNER JOIN p3color AS c ON c.id = phc.color_id where phc.product_id = ? ORDER BY c.order`,
      [id]
    );
  }
}

module.exports = Project3ColorsByProduct;
