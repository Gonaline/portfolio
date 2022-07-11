const AbstractManager = require("./AbstractManager");

class Project2Manager extends AbstractManager {
  static table = "project2";

  insert(project2) {
    return this.connection.query(
      `insert into ${Project2Manager.table} (message) values (?)`,
      [project2.message]
    );
  }

  update(project2) {
    return this.connection.query(
      `update ${Project2Manager.table} set message = ? where id = ?`,
      [project2.message, project2.id]
    );
  }
}

module.exports = Project2Manager;
