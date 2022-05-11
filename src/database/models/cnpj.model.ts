import { DataTypes, Model } from 'sequelize';
import sequelize from '../config';

class Cnpj extends Model {
  declare id: number;

  declare cnpj: string;

  declare companyType: string;

  declare createdAt: Date;

  declare updatedAt: Date;
}

Cnpj.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  cnpj: DataTypes.STRING,
  companyType: DataTypes.STRING,
  createdAt: DataTypes.DATE,
  updatedAt: DataTypes.DATE,
}, {
  timestamps: true,
  modelName: 'Cnpj',
  tableName: 'cnpjs',
  charset: 'latin1',
  sequelize,
});

export default Cnpj;
