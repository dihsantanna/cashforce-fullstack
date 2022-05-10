import { Table, Column, Model, HasMany } from 'sequelize-typescript';
import { DataTypes } from 'sequelize/types';
import { CnpjAttributes, CnpjCreationAttributes } from 'src/types/CnpjCreationAttribute.interface';
import Buyer from './buyer.model';
import Order from './order.model';
import Provider from './provider.model';

@Table({
  timestamps: true,
  modelName: 'Cnpj',
  tableName: 'cnpjs'
})
export default class Cnpj extends Model<CnpjAttributes, CnpjCreationAttributes> {
  @Column(DataTypes.STRING)
  cnpj: string;

  @Column(DataTypes.STRING)
  companyType: string;

  @HasMany(() => Provider)
  providers: Provider[];

  @HasMany(() => Buyer)
  buyers: Buyer[];

  @HasMany(() => Order)
  orders: Order[];
}
