const AbstractManager = require("./AbstractManager");

class Project3ColorsByProduct extends AbstractManager {
  static table = "p3colorsbyproduct";

  findAll() {
    return this.connection.query(
      `SELECT phc.productid, c.name, c.img
      FROM p3producthascolorgroup AS phc
      INNER JOIN p3colorgroup AS c ON c.id = phc.colorgroupid
      ORDER BY phc.productid;`
    );
  }

  find(id) {
    return this.connection.query(
      `SELECT phc.productid, c.name, c.img
      FROM p3producthascolorgroup AS phc
      INNER JOIN p3colorgroup AS c ON c.id = phc.colorgroupid
      WHERE phc.productid = ?`,
      [id]
    );
  }
}

module.exports = Project3ColorsByProduct;
