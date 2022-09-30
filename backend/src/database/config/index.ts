import 'dotenv/config';
import { Sequelize } from 'sequelize-typescript';

const databaseConfig = require('./databaseConfig');

const appEnv = process.env.NODE_ENV || 'development';

let sequelize: Sequelize;

switch (appEnv) {
  case 'test':
    sequelize = new Sequelize(databaseConfig.test);
    break;
  case 'production':
    sequelize = new Sequelize(databaseConfig.production);
    break;
  default:
    sequelize = new Sequelize(databaseConfig.development);
    break;
}

export default sequelize;