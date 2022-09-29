import { DataTypes, Model } from 'sequelize';
import Cnpj from './cnpj.model';
import sequelize from '../config';

class Provider extends Model {
  declare id: number;

  declare name: string;

  declare tradingName: string;

  declare cashforceTax: string;

  declare responsibleName: string;

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

  declare bank: string;

  declare bankAgency: string;

  declare account: string;

  declare documents: string;

  declare phoneNumber: string;

  declare situation: string;

  declare situationDate: string;

  declare createdAt: Date;

  declare updatedAt: Date;

  declare cnpjId: number;

  declare email: string;
}

Provider.init({
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
  bank: DataTypes.STRING,
  bankAgency: DataTypes.STRING,
  account: DataTypes.STRING,
  documents: DataTypes.STRING,
  phoneNumber: DataTypes.STRING,
  situation: DataTypes.STRING,
  situationDate: DataTypes.STRING,
  createdAt: DataTypes.DATE,
  updatedAt: DataTypes.DATE,
  cnpjId: DataTypes.INTEGER,
  email: DataTypes.STRING,
}, {
  timestamps: true,
  modelName: 'Provider',
  tableName: 'providers',
  charset: 'latin1',
  sequelize,
});

Provider.belongsTo(Cnpj, { foreignKey: 'cnpjId', as: 'cnpj' });

Cnpj.hasMany(Provider, { foreignKey: 'id', as: 'providers' });

export default Provider;
