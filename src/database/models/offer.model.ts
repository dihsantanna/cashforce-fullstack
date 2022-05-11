import { Table, Column, Model, ForeignKey, BelongsTo, DataType } from 'sequelize-typescript';
import {
  OfferAttributes,
  OfferCreationAttributes,
} from '../../interfaces/OfferCreationAttribute.interface';
import Order from './order.model';
import Sponsor from './sponsor.model';

@Table({
  timestamps: true,
  modelName: 'Offer',
  tableName: 'offers',
  charset: 'latin1',
})
class Offer extends Model<OfferAttributes, OfferCreationAttributes> {
  @Column(DataType.STRING)
    tax: string;

  @Column(DataType.STRING)
    tariff: string;

  @Column(DataType.STRING)
    adValorem: string;

  @Column(DataType.STRING)
    float: string;

  @Column(DataType.STRING)
    iof: string;

  @Column(DataType.DATE)
    expiresIn: Date;

  @Column(DataType.TINYINT)
    paymentStatusSponsor: number;

  @Column(DataType.TINYINT)
    paymentStatusProvider: number;

  @ForeignKey(() => Order)
  @Column(DataType.INTEGER)
    orderId: number;

  @BelongsTo(() => Order)
    order: Order;

  @ForeignKey(() => Sponsor)
  @Column(DataType.INTEGER)
    sponsorId: number;

  @BelongsTo(() => Sponsor)
    sponsor: Sponsor;
}

export default Offer;
