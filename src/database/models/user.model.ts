import { Table, Column, Model, HasMany, DataType } from 'sequelize-typescript';
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
  @Column(DataType.STRING)
    name: string;

  @Column(DataType.STRING)
    email: string;

  @Column(DataType.STRING)
    phoneNumber: string;

  @Column(DataType.STRING)
    mobile: string;

  @Column(DataType.STRING)
    departament: string;

  @Column(DataType.STRING)
    verificationCode: string;

  @Column(DataType.TINYINT)
    emailChecked: number;

  @Column(DataType.TINYINT)
    cashforceAdm: number;

  @HasMany(() => Order)
    orders: Order[];
}

export default User;
