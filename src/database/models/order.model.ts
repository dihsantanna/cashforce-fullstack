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
  OrderAttributes,
  OrderCreationAttributes,
} from '../../interfaces/OrderCreationAttribute.interface';
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
class Order extends Model<OrderAttributes, OrderCreationAttributes> {
  @Column(DataType.STRING)
    orderNfId: string;

  @Column(DataType.STRING)
    orderNumber: string;

  @Column(DataType.STRING)
    orderPath: string;

  @Column(DataType.STRING)
    orderFileName: string;

  @Column(DataType.STRING)
    orderOriginalName: string;

  @Column(DataType.STRING)
    emissionDate: string;

  @Column(DataType.STRING)
    pdfFile: string;

  @Column(DataType.STRING)
    emitedTo: string;

  @Column(DataType.STRING)
    nNf: string;

  @Column(DataType.STRING)
    CTE: string;

  @Column(DataType.STRING)
    value: string;

  @ForeignKey(() => Cnpj)
  @Column(DataType.INTEGER)
    cnpjId: number;

  @BelongsTo(() => Cnpj)
    cnpj: Cnpj;

  @ForeignKey(() => User)
  @Column(DataType.INTEGER)
    userId: number;

  @BelongsTo(() => User)
    user: User;

  @ForeignKey(() => Buyer)
  @Column(DataType.INTEGER)
    buyerId: number;

  @BelongsTo(() => Buyer)
    buyer: Buyer;

  @ForeignKey(() => Provider)
  @Column(DataType.INTEGER)
    providerId: number;

  @BelongsTo(() => Provider)
    provider: Provider;

  @Column(DataType.STRING)
    orderStatusBuyer: string;

  @Column(DataType.STRING)
    orderStatusProvider: string;

  @Column(DataType.STRING)
    deliveryReceipt: string;

  @Column(DataType.STRING)
    cargoPackingList: string;

  @Column(DataType.STRING)
    deliveryCtrc: string;

  @HasMany(() => Orderportion)
    orderportions: Orderportion[];

  @HasMany(() => Offer)
    offers: Offer[];
}

export default Order;
