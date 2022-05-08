import { Table, Column, Model, HasMany, CreatedAt, UpdatedAt } from 'sequelize-typescript';
import { DataTypes } from 'sequelize/types';
import { UserAttributes, UserCreationAttributes } from 'src/types/UserCreationAttributes';

@Table({
  timestamps: true,
  modelName: 'User',
  tableName: 'users'
})
export default class User extends Model<UserAttributes, UserCreationAttributes> {
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
  @Column(DataTypes.TINYINT({length: 1}))
  emailChecked: number;
  @Column(DataTypes.TINYINT({length: 1}))
  cashforceAdm: number;
}
