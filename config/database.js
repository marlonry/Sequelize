const Sequelize = require("sequelize");

// Option 1: Passing parameters separately
module.exports = new Sequelize("test", "sa", "marlon", {
  host: "localhost",
  dialect: "mssql",
  port: "1433",
  // user: "sa",
  // password: "marlon",
  // server: "A2I-STUDENT",
  // database: "SequelizeTest",
  dialectOptions: {
    instanceName: "MSSQL2017"
  },

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});
