const AbstractManager = require("./AbstractManager");

class PageManager extends AbstractManager {
  static table = "page";

  insert(page) {
    return this.connection.query(
      `insert into ${PageManager.table} (message) values (?)`,
      [page.message]
    );
  }

  update(page) {
    return this.connection.query(
      `update ${PageManager.table} set message = ? where id = ?`,
      [page.message, page.id]
    );
  }
}

module.exports = PageManager;
