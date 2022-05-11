import { Table, Column, Model, ForeignKey, BelongsTo, HasMany } from 'sequelize-typescript';
import { DataTypes } from 'sequelize/types';
import {
  OrderAttributes,
  OrderCreationAttributes,
} from 'src/interfaces/OrderCreationAttribute.interface';
import Buyer from './buyer.model';
import Cnpj from './cnpj.model';
import Offer from './offer.model';
import Orderportion from './orderportion.model';
import Provider from './provider.model';
import User from './user.model';

@Table({
  timestamps: true,
  modelName: 'Order',
  tableName: 'orders',
  charset: 'latin1',
})
export default class Order extends Model<OrderAttributes, OrderCreationAttributes> {
  @Column(DataTypes.STRING)
    orderNfId: string;

  @Column(DataTypes.STRING)
    orderNumber: string;

  @Column(DataTypes.STRING)
    orderPath: string;

  @Column(DataTypes.STRING)
    orderFileName: string;

  @Column(DataTypes.STRING)
    orderOriginalName: string;

  @Column(DataTypes.STRING)
    emissionDate: string;

  @Column(DataTypes.STRING)
    pdfFile: string;

  @Column(DataTypes.STRING)
    emitedTo: string;

  @Column(DataTypes.STRING)
    nNf: string;

  @Column(DataTypes.STRING)
    CTE: string;

  @Column(DataTypes.STRING)
    value: string;

  @ForeignKey(() => Cnpj)
  @Column(DataTypes.INTEGER)
    cnpjId: number;

  @BelongsTo(() => Cnpj)
    cnpj: Cnpj;

  @ForeignKey(() => User)
  @Column(DataTypes.INTEGER)
    userId: number;

  @BelongsTo(() => User)
    user: User;

  @ForeignKey(() => Buyer)
  @Column(DataTypes.INTEGER)
    buyerId: number;

  @BelongsTo(() => Buyer)
    buyer: Buyer;

  @ForeignKey(() => Provider)
  @Column(DataTypes.INTEGER)
    providerId: number;

  @BelongsTo(() => Provider)
    provider: Provider;

  @Column(DataTypes.STRING)
    orderStatusBuyer: string;

  @Column(DataTypes.STRING)
    orderStatusProvider: string;

  @Column(DataTypes.STRING)
    deliveryReceipt: string;

  @Column(DataTypes.STRING)
    cargoPackingList: string;

  @Column(DataTypes.STRING)
    deliveryCtrc: string;

  @HasMany(() => Orderportion)
    orderportions: Orderportion[];

  @HasMany(() => Offer)
    offers: Offer[];
}
