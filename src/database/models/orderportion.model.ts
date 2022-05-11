import { Table, Column, Model, ForeignKey, BelongsTo, DataType } from 'sequelize-typescript';
import {
  OrderportionAttributes,
  OrderportionCreationAttributes,
} from '../../interfaces/OrderportionCreationAttribute.interface';
import Order from './order.model';

@Table({
  timestamps: true,
  modelName: 'Orderportion',
  tableName: 'orderportions',
  charset: 'latin1',
})
class Orderportion extends Model<
  OrderportionAttributes,
  OrderportionCreationAttributes
  > {
  @Column(DataType.STRING)
    nDup: string;

  @Column(DataType.STRING)
    dVenc: string;

  @Column(DataType.STRING)
    vDup: string;

  @Column(DataType.TINYINT)
    availableToMarket: number;

  @ForeignKey(() => Order)
  @Column(DataType.INTEGER)
    orderId: number;

  @BelongsTo(() => Order)
    order: Order;
}

export default Orderportion;
