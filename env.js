"use strict";

const env = {
  DATABASE_NAME: process.env.DATABASE_NAME || "SequelizeTest",
  DATABASE_HOST: process.env.DATABASE_HOST || "127.0.0.1",
  DATABASE_USERNAME: process.env.DATABASE_USERNAME || "test",
  DATABASE_PASSWORD: process.env.DATABASE_PASSWORD || "test01",
  DATABASE_PORT: process.env.DATABASE_PORT || 1433,
  DATABASE_DIALECT: process.env.DATABASE_DIALECT || "mssql",
  DATABASE_INSTANCE: "SQLExpress",

  NODE_ENV: process.env.NODE_ENV || "development"
};

module.exports = env;
