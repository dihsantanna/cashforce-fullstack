import { Table, Column, Model, HasMany, DataType } from 'sequelize-typescript';
import {
  CnpjAttributes,
  CnpjCreationAttributes,
} from '../../interfaces/CnpjCreationAttribute.interface';
import Buyer from './buyer.model';
import Order from './order.model';
import Provider from './provider.model';
import Sponsor from './sponsor.model';

@Table({
  timestamps: true,
  modelName: 'Cnpj',
  tableName: 'cnpjs',
  charset: 'latin1',
})
class Cnpj extends Model<CnpjAttributes, CnpjCreationAttributes> {
  @Column(DataType.STRING)
    cnpj: string;

  @Column(DataType.STRING)
    companyType: string;

  @HasMany(() => Provider)
    providers: Provider[];

  @HasMany(() => Buyer)
    buyers: Buyer[];

  @HasMany(() => Order)
    orders: Order[];

  @HasMany(() => Sponsor)
    sponsors: Sponsor[];
}

export default Cnpj;
