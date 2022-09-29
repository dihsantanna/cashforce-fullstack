import dotenv = require('dotenv');

dotenv.config();

module.exports = {
  development: {
    username: process.env.DB_USER ?? 'root',
    password: process.env.DB_PASS ?? '123456',
    database: `${process.env.DB_NAME ?? 'cashforce'}-dev`,
    host: process.env.DB_HOST ?? 'localhost',
    port: process.env.DB_PORT ?? '3306',
    dialect: 'mysql',
  },
  test: {
    username: process.env.DB_USER ?? 'root',
    password: process.env.DB_PASS ?? '123456',
    database: `${process.env.DB_NAME ?? 'cashforce'}-test`,
    host: process.env.DB_HOST ?? 'localhost',
    port: process.env.DB_PORT ?? '3306',
    dialect: process.env.DB_DIALECT ?? 'mysql',
  },
  production: {
    username: process.env.DB_USER ?? 'root',
    password: process.env.DB_PASS ?? '123456',
    database: `${process.env.DB_NAME}` ?? 'cashforce',
    host: process.env.DB_HOST ?? 'localhost',
    port: process.env.DB_PORT ?? '3306',
    dialect: process.env.DB_DIALECT ?? 'mysql',
  },
};
