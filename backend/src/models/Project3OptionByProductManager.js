const AbstractManager = require("./AbstractManager");

class Project3OptionByProduct extends AbstractManager {
  static table = "p3optionbyproduct";

  find(id) {
    return this.connection.query(
      ` SELECT o.id, o.optionName, od.optionDetailName, od.codeImg
      FROM p3option_has_optiondetail AS oho
      INNER JOIN p3option AS o ON o.id = oho.option_id
      INNER JOIN p3optiondetail AS od ON od.id = oho.optiondetail_id
      WHERE o.id = ?`,
      [id]
    );
  }
}

module.exports = Project3OptionByProduct;
