import  {  Sequelize  }  from  'sequelize-typescript'
const databaseConfig =  require( '../config/databaseConfig');
import 'dotenv/config';

const appEnv = process.env.APP_ENV;

let sequelize: Sequelize;

switch (appEnv) {
  case 'test':
    sequelize = new Sequelize(databaseConfig.test);
    break;
  case 'development':
    sequelize = new Sequelize(databaseConfig.development);
    break;
  default:
    sequelize = new Sequelize(databaseConfig.production);
    break;
}

export default sequelize;
