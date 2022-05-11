import { DataTypes, Model } from 'sequelize';
import Order from './order.model';
import Sponsor from './sponsor.model';
import sequelize from '../config';

class Offer extends Model {
  declare id: number;

  declare tax: string;

  declare tariff: string;

  declare adValorem: string;

  declare float: string;

  declare iof: string;

  declare expiresIn: Date;

  declare paymentStatusSponsor: number;

  declare paymentStatusProvider: number;

  declare createdAt: Date;

  declare updatedAt: Date;

  declare orderId: number;

  declare sponsorId: number;
}

Offer.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  tax: DataTypes.STRING,
  tariff: DataTypes.STRING,
  adValorem: DataTypes.STRING,
  float: DataTypes.STRING,
  iof: DataTypes.STRING,
  expiresIn: DataTypes.DATE,
  paymentStatusSponsor: DataTypes.TINYINT,
  paymentStatusProvider: DataTypes.TINYINT,
  createdAt: DataTypes.DATE,
  updatedAt: DataTypes.DATE,
  orderId: DataTypes.INTEGER,
  sponsorId: DataTypes.INTEGER,
}, {
  timestamps: true,
  modelName: 'Offer',
  tableName: 'offers',
  charset: 'latin1',
  sequelize,
});

Offer.belongsTo(Order, { foreignKey: 'orderId', as: 'order' });
Offer.belongsTo(Sponsor, { foreignKey: 'sponsorId', as: 'sponsor' });

Order.hasMany(Offer, { foreignKey: 'id', as: 'offers' });
Sponsor.hasMany(Offer, { foreignKey: 'id', as: 'offers' });

export default Offer;
