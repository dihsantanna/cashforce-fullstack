import { Table, Column, Model, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { DataTypes } from 'sequelize';
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
  @Column(DataTypes.STRING)
    nDup: string;

  @Column(DataTypes.STRING)
    dVenc: string;

  @Column(DataTypes.STRING)
    vDup: string;

  @Column(DataTypes.TINYINT)
    availableToMarket: number;

  @ForeignKey(() => Order)
  @Column(DataTypes.INTEGER)
    orderId: number;

  @BelongsTo(() => Order)
    order: Order;
}

export default Orderportion;
