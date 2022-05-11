import { Table, Column, Model, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { DataTypes } from 'sequelize';
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
  @Column(DataTypes.STRING)
    tax: string;

  @Column(DataTypes.STRING)
    tariff: string;

  @Column(DataTypes.STRING)
    adValorem: string;

  @Column(DataTypes.STRING)
    float: string;

  @Column(DataTypes.STRING)
    iof: string;

  @Column(DataTypes.DATE)
    expiresIn: Date;

  @Column(DataTypes.TINYINT)
    paymentStatusSponsor: number;

  @Column(DataTypes.TINYINT)
    paymentStatusProvider: number;

  @ForeignKey(() => Order)
  @Column(DataTypes.INTEGER)
    orderId: number;

  @BelongsTo(() => Order)
    order: Order;

  @ForeignKey(() => Sponsor)
  @Column(DataTypes.INTEGER)
    sponsorId: number;

  @BelongsTo(() => Sponsor)
    sponsor: Sponsor;
}

export default Offer;
