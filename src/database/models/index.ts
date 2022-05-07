import { Sequelize } from 'sequelize';
const databaseConfig =  require( '../config/databaseConfig');
import 'dotenv/config';

const appEnv = process.env.APP_ENV;

let sequelize: Sequelize;

switch (appEnv) {
  case 'test':
    sequelize = new Sequelize(databaseConfig.test);
    break;
  case 'production':
    sequelize = new Sequelize(databaseConfig.production);
    break;
  case 'development':
      sequelize = new Sequelize(databaseConfig.development);
      break;
  default:
    console.log(`Passe o valor
     'development', 'test' ou 'production'
     na variável de ambiente APP_ENV`);
    sequelize = new Sequelize();
}

export default sequelize;
