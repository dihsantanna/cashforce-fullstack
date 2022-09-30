import dotenv = require('dotenv');
import * as pg from 'pg';
import { Sequelize } from 'sequelize-typescript';

dotenv.config();

const databaseConfig = require('./databaseConfig');

const appEnv = process.env.NODE_ENV || 'development';

let sequelize: Sequelize;

switch (appEnv) {
  case 'test':
    sequelize = new Sequelize(databaseConfig.test);
    break;
  case 'production':
    sequelize = new Sequelize(databaseConfig.production, {
  dialectModule: pg
});
    break;
  default:
    sequelize = new Sequelize(databaseConfig.development);
    break;
}

export default sequelize;
