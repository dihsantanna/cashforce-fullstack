import { DataTypes, Model } from 'sequelize';
import Cnpj from './cnpj.model';
import sequelize from '../config';

class Buyer extends Model {
  declare id: number;

  declare name: string;

  declare tradingName: string;

  declare cashforceTax: string;

  declare responsibleName:string;

  declare responsibleEmail: string;

  declare responsiblePosition: string;

  declare responsiblePhone: string;

  declare responsibleMobile: string;

  declare website: string;

  declare postalCode: string;

  declare address: string;

  declare number: string;

  declare complement: string;

  declare neighborhood: string;

  declare city: string;

  declare state: string;

  declare phoneNumber: string;

  declare situation: string;

  declare situationDate: string;

  declare createdAt: Date;

  declare updatedAt: Date;

  declare cnpjId: number;

  declare confirm: number;

  declare email: string;
}

Buyer.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  name: DataTypes.STRING,
  tradingName: DataTypes.STRING,
  cashforceTax: DataTypes.STRING,
  responsibleName: DataTypes.STRING,
  responsibleEmail: DataTypes.STRING,
  responsiblePosition: DataTypes.STRING,
  responsiblePhone: DataTypes.STRING,
  responsibleMobile: DataTypes.STRING,
  website: DataTypes.STRING,
  postalCode: DataTypes.STRING,
  address: DataTypes.STRING,
  number: DataTypes.STRING,
  complement: DataTypes.STRING,
  neighborhood: DataTypes.STRING,
  city: DataTypes.STRING,
  state: DataTypes.STRING,
  phoneNumber: DataTypes.STRING,
  situation: DataTypes.STRING,
  situationDate: DataTypes.STRING,
  createdAt: DataTypes.DATE,
  updatedAt: DataTypes.DATE,
  cnpjId: DataTypes.INTEGER,
  confirm: DataTypes.TINYINT,
  email: DataTypes.STRING,
}, {
  timestamps: true,
  modelName: 'Buyer',
  tableName: 'buyers',
  charset: 'latin1',
  sequelize,
});

Buyer.belongsTo(Cnpj, { foreignKey: 'cnpjId', as: 'cnpj' });

Cnpj.hasMany(Buyer, { foreignKey: 'id', as: 'buyers' });

export default Buyer;
