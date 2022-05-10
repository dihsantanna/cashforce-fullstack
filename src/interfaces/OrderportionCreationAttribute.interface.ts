import  {  Optional  }  from  'sequelize'

export interface OrderportionAttributes {
  id: number,
  nDup: string,
  dVenc: string,
  vDup: string,
  availableToMarket: number,
  orderId: number,
  createdAt: Date,
  updatedAt: Date,
}

export interface OrderportionCreationAttributes extends Optional<OrderportionAttributes, 'id'> {}
