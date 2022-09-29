import { DataTypes, Model } from 'sequelize';
import Order from './order.model';
import sequelize from '../config';

class Orderportion extends Model {
  declare id: number;

  declare nDup: string;

  declare dVenc: string;

  declare vDup: string;

  declare availableToMarket: number;

  declare createdAt: Date;

  declare updatedAt: Date;

  declare orderId: number;
}

Orderportion.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  nDup: DataTypes.STRING,
  dVenc: DataTypes.STRING,
  vDup: DataTypes.STRING,
  availableToMarket: DataTypes.TINYINT,
  createdAt: DataTypes.DATE,
  updatedAt: DataTypes.DATE,
  orderId: DataTypes.INTEGER,
}, {
  timestamps: true,
  modelName: 'Orderportion',
  tableName: 'orderportions',
  charset: 'latin1',
  sequelize,
});

Orderportion.belongsTo(Order, { foreignKey: 'orderId', as: 'order' });

Order.hasMany(Orderportion, { foreignKey: 'id', as: 'Orderportions' });

export default Orderportion;
