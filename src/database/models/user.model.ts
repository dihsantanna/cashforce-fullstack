import { Table, Column, Model, HasMany } from 'sequelize-typescript';
import { DataTypes } from 'sequelize';
import {
  UserAttributes,
  UserCreationAttributes,
} from '../../interfaces/UserCreationAttributes.interface';
import Order from './order.model';

@Table({
  timestamps: true,
  modelName: 'User',
  tableName: 'users',
  charset: 'latin1',
})
class User extends Model<UserAttributes, UserCreationAttributes> {
  @Column(DataTypes.STRING)
    name: string;

  @Column(DataTypes.STRING)
    email: string;

  @Column(DataTypes.STRING)
    phoneNumber: string;

  @Column(DataTypes.STRING)
    mobile: string;

  @Column(DataTypes.STRING)
    departament: string;

  @Column(DataTypes.STRING)
    verificationCode: string;

  @Column(DataTypes.TINYINT)
    emailChecked: number;

  @Column(DataTypes.TINYINT)
    cashforceAdm: number;

  @HasMany(() => Order)
    orders: Order[];
}

export default User;
