const AbstractManager = require("./AbstractManager");

class Project1Manager extends AbstractManager {
  static table = "project1";

  insert(project1) {
    return this.connection.query(
      `insert into ${Project1Manager.table} (message) values (?)`,
      [project1.message]
    );
  }

  update(project1) {
    return this.connection.query(
      `update ${Project1Manager.table} set message = ? where id = ?`,
      [project1.message, project1.id]
    );
  }
}

module.exports = Project1Manager;
