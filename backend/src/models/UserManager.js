const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  static table = "user";

  update(user) {
    return this.connection.query(
      `update ${UserManager.table} set ? where id = ?`,
      [user, user.id]
    );
  }

  insert(user) {
    return this.connection.query(
      `insert into ${UserManager.table} (firstname, lastname, email, password) values (?,?,?,?)`,
      [user.firstname, user.lastname, user.email, user.password]
    );
  }

  findByEmail(email) {
    return this.connection.query(
      `select * from ${UserManager.table} where email=?`,
      [email]
    );
  }
}

module.exports = UserManager;
