import dotenv = require('dotenv');
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
    sequelize = new Sequelize(process.env.DB_URL as string);
    break;
  default:
    sequelize = new Sequelize(databaseConfig.development);
    break;
}

export default sequelize;
