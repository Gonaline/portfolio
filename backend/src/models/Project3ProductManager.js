const AbstractManager = require("./AbstractManager");

class Project3ProductManager extends AbstractManager {
  static table = "p3product";

  insert(p3product) {
    return this.connection.query(
      `insert into ${Project3ProductManager.table} (message) values (?)`,
      [p3product.message]
    );
  }

  update(p3product) {
    return this.connection.query(
      `update ${Project3ProductManager.table} set message = ? where id = ?`,
      [p3product.message, p3product.id]
    );
  }
}

module.exports = Project3ProductManager;
