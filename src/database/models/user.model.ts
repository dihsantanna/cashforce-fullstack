import { DataTypes, Model } from 'sequelize';
import sequelize from '../config';

class User extends Model {
  declare id: number;

  declare name: string;

  declare email: string;

  declare phoneNumber: string;

  declare mobile: string;

  declare departament: string;

  declare verificationCode: string;

  declare emailChecked: number;

  declare createdAt: Date;

  declare updatedAt: Date;

  declare cashforceAdm: number;
}

User.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  name: DataTypes.STRING,
  email: DataTypes.STRING,
  phoneNumber: DataTypes.STRING,
  mobile: DataTypes.STRING,
  departament: DataTypes.STRING,
  verificationCode: DataTypes.STRING,
  emailChecked: DataTypes.TINYINT,
  createdAt: DataTypes.DATE,
  updatedAt: DataTypes.DATE,
  cashforceAdm: DataTypes.TINYINT,
}, {
  timestamps: true,
  modelName: 'User',
  tableName: 'users',
  charset: 'latin1',
  sequelize,
});

export default User;
