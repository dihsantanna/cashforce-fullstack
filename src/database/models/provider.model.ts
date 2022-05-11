import {
  Table,
  Column,
  Model,
  ForeignKey,
  BelongsTo,
  HasMany,
  DataType,
} from 'sequelize-typescript';
import {
  ProviderAttributes,
  ProviderCreationAttributes,
} from '../../interfaces/ProviderCreationAttribute.interface';
import Cnpj from './cnpj.model';
import Order from './order.model';

@Table({
  timestamps: true,
  modelName: 'Provider',
  tableName: 'providers',
  charset: 'latin1',
})
class Provider extends Model<ProviderAttributes, ProviderCreationAttributes> {
  @Column(DataType.STRING)
    name: string;

  @Column(DataType.STRING)
    tradingName: string;

  @Column(DataType.STRING)
    cashforceTax: string;

  @Column(DataType.STRING)
    responsibleName: string;

  @Column(DataType.STRING)
    responsibleEmail: string;

  @Column(DataType.STRING)
    responsiblePosition: string;

  @Column(DataType.STRING)
    responsiblePhone: string;

  @Column(DataType.STRING)
    responsibleMobile: string;

  @Column(DataType.STRING)
    website: string;

  @Column(DataType.STRING)
    postalCode: string;

  @Column(DataType.STRING)
    address: string;

  @Column(DataType.STRING)
    number: string;

  @Column(DataType.STRING)
    complement: string;

  @Column(DataType.STRING)
    neighborhood: string;

  @Column(DataType.STRING)
    city: string;

  @Column(DataType.STRING)
    state: string;

  @Column(DataType.STRING)
    bank: string;

  @Column(DataType.STRING)
    bankAgency: string;

  @Column(DataType.STRING)
    account: string;

  @Column(DataType.STRING)
    documents: string;

  @Column(DataType.STRING)
    phoneNumber: string;

  @Column(DataType.STRING)
    situation: string;

  @Column(DataType.STRING)
    situationDate: string;

  @ForeignKey(() => Cnpj)
  @Column(DataType.INTEGER)
    cnpjId: number;

  @BelongsTo(() => Cnpj)
    cnpj: Cnpj;

  @Column(DataType.STRING)
    email: string;

  @HasMany(() => Order)
    orders: Order[];
}

export default Provider;
