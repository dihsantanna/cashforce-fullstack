import { Table, Column, Model, ForeignKey, BelongsTo, DataType } from 'sequelize-typescript';
import {
  BuyerAttributes,
  BuyerCreationAttributes,
} from '../../interfaces/BuyerCreationAttribute.interface';
import Cnpj from './cnpj.model';

@Table({
  timestamps: true,
  modelName: 'Buyer',
  tableName: 'buyers',
  charset: 'latin1',
})
class Buyer extends Model<BuyerAttributes, BuyerCreationAttributes> {
  @Column(DataType.STRING)
    name: string;

  @Column(DataType.STRING)
    tradingName: string;

  @Column(DataType.STRING)
    cashforceTax: string;

  @Column(DataType.STRING)
    responsibleName:string;

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

  @Column(DataType.TINYINT)
    confirm: number;

  @Column(DataType.STRING)
    email: string;
}

export default Buyer;
