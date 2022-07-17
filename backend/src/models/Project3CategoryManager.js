const AbstractManager = require("./AbstractManager");

class Project3CategoryManager extends AbstractManager {
  static table = "p3category";

  insert(p3category) {
    return this.connection.query(
      `insert into ${Project3CategoryManager.table} (message) values (?)`,
      [p3category.message]
    );
  }

  update(p3category) {
    return this.connection.query(
      `update ${Project3CategoryManager.table} set message = ? where id = ?`,
      [p3category.message, p3category.id]
    );
  }
}

module.exports = Project3CategoryManager;
