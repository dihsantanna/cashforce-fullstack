import { Table, Column, Model, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { DataTypes } from 'sequelize/types';
import { BuyerAttributes, BuyerCreationAttributes } from 'src/interfaces/BuyerCreationAttribute.interface';
import Cnpj from './cnpj.model';

@Table({
  timestamps: true,
  modelName: 'Buyer',
  tableName: 'buyers',
  charset: 'latin1'
})
export default class Buyer extends Model<BuyerAttributes, BuyerCreationAttributes> {
  @Column(DataTypes.STRING)
  name: string;

  @Column(DataTypes.STRING)
  tradingName: string;

  @Column(DataTypes.STRING)
  cashforceTax: string;

  @Column(DataTypes.STRING)
  responsibleName:string;

  @Column(DataTypes.STRING)
  responsibleEmail: string;

  @Column(DataTypes.STRING)
  responsiblePosition: string;

  @Column(DataTypes.STRING)
  responsiblePhone: string;

  @Column(DataTypes.STRING)
  responsibleMobile: string;

  @Column(DataTypes.STRING)
  website: string;

  @Column(DataTypes.STRING)
  postalCode: string;

  @Column(DataTypes.STRING)
  address: string;

  @Column(DataTypes.STRING)
  number: string;

  @Column(DataTypes.STRING)
  complement: string;

  @Column(DataTypes.STRING)
  neighborhood: string;

  @Column(DataTypes.STRING)
  city: string;

  @Column(DataTypes.STRING)
  state: string;

  @Column(DataTypes.STRING)
  phoneNumber: string;

  @Column(DataTypes.STRING)
  situation: string;

  @Column(DataTypes.STRING)
  situationDate: string;

  @ForeignKey(() => Cnpj)
  @Column(DataTypes.INTEGER)
  cnpjId: number;
  @BelongsTo(() => Cnpj)
  cnpj: Cnpj;

  @Column(DataTypes.TINYINT)
  confirm: number;
  
  @Column(DataTypes.STRING)
  email: string;
}
