import dotenv = require('dotenv');
import * as pg from 'pg';
import { SequelizeOptions } from 'sequelize-typescript';

dotenv.config();

interface DatabaseConfig {
  development: SequelizeOptions;
  test: SequelizeOptions;
  production: SequelizeOptions;
}

module.exports = {
  development: {
    username: process.env.DB_USER || 'root',
    password: process.env.DB_PASS || '123456',
    database: process.env.DB_NAME || 'cashforce',
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || '3306',
    dialect: process.env.DB_DIALECT || 'mysql',
  },
  test: {
    username: process.env.DB_USER || 'root',
    password: process.env.DB_PASS || '123456',
    database: `${process.env.DB_NAME || 'cashforce'}-test`,
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || '3306',
    dialect: process.env.DB_DIALECT || 'mysql',
  },
  production: {
    username: process.env.DB_USER || 'root',
    password: process.env.DB_PASS || '123456',
    database: process.env.DB_NAME || 'cashforce',
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || '3306',
    dialect: process.env.DB_DIALECT || 'postgres',
    dialectModule: pg,
    schema: process.env.DB_SCHEMA || 'public',
  },
} as unknown as DatabaseConfig;
