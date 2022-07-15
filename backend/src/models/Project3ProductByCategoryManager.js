const AbstractManager = require("./AbstractManager");

class NewsAndTeamManager extends AbstractManager {
  static table = "p3productbycategory";

  findAll() {
    return this.connection.query(
      `SELECT p.name, p.id, chp.category_id
      FROM p3category_has_product AS chp
      INNER JOIN p3product AS p ON p.id=chp.product_id;`
    );
  }

  // find(id) {
  //   return this.connection.query(
  //     `select * from  ${this.table} where category_id = ?`,
  //     [id]
  //   );
  // }
}

module.exports = NewsAndTeamManager;
