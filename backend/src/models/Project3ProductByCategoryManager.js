const AbstractManager = require("./AbstractManager");

class Project3ProductByCategoryManager extends AbstractManager {
  static table = "p3productbycategory";

  findAll() {
    return this.connection.query(
      `SELECT p.name, p.id, chp.categoryid
      FROM p3categoryhasproduct AS chp
      INNER JOIN p3product AS p ON p.id=chp.productid;`
    );
  }

  // find(id) {
  //   return this.connection.query(
  //     `select * from  ${this.table} where category_id = ?`,
  //     [id]
  //   );
  // }
}

module.exports = Project3ProductByCategoryManager;
