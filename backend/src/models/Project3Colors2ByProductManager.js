const AbstractManager = require("./AbstractManager");

class Project3Colors2ByProduct extends AbstractManager {
  static table = "p3colors2byproduct";

  findAll() {
    return this.connection.query(
      `SELECT phc.product_id, c.name, c.img
      FROM p3product_has_color2 AS phc
      INNER JOIN p3color AS c ON c.id = phc.color_id
      ORDER BY phc.product_id;`
    );
  }

  find(id) {
    return this.connection.query(
      `SELECT c.name, c.img, phc.product_id FROM p3product_has_color2 AS phc
    INNER JOIN p3color AS c ON c.id = phc.color_id where phc.product_id = ?`,
      [id]
    );
  }
}

module.exports = Project3Colors2ByProduct;
