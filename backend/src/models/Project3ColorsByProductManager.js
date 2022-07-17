const AbstractManager = require("./AbstractManager");

class Project3ColorsByProduct extends AbstractManager {
  static table = "p3colorsbyproduct";

  findAll() {
    return this.connection.query(
      `SELECT phc.product_id, c.name, c.img
      FROM p3product_has_color AS phc
      INNER JOIN p3color AS c ON c.id = phc.color_id
      ORDER BY phc.product_id;`
    );
  }

  // find(id) {
  //   return this.connection.query(
  //     `SELECT c.name, phc.product_id FROM p3product_has_color AS phc
  //      INNER JOIN p3color AS c ON c.id = phc.color_id
  //      WHERE phc.product_id = ?`,
  //     [id]
  //   );
  // }

  find(id) {
    return this.connection.query(
      `SELECT c.name, phc.product_id FROM p3product_has_color AS phc
    INNER JOIN p3color AS c ON c.id = phc.color_id where phc.product_id = ?`,
      [id]
    );
  }

  // find(id) {
  //   return this.connection.query(
  //     `SELECT phc.productid, c.name
  //     FROM p3producthascolorgroup AS phc
  //      INNER JOIN p3colorgroup AS c ON c.id = phc.colorgroupid
  //      WHERE phc.productid = ?`,
  //     [id]
  //   );
  // }
}

module.exports = Project3ColorsByProduct;
