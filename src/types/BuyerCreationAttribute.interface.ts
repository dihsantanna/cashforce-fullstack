import  {  Optional  }  from  'sequelize'

export interface BuyerAttributes {
  id: number,
  name: string,
  tradingName: string,
  cashforceTax: string,
  responsibleName:string,
  responsibleEmail: string,
  responsiblePosition: string,
  responsiblePhone: string,
  responsibleMobile: string,
  website: string,
  postalCode: string,
  address: string,
  number: string,
  complement: string,
  neighborhood: string,
  city: string,
  state: string,
  phoneNumber: string,
  situation: string,
  situationDate: string,
  cnpjId: number,
  confirm: number,
  email: string,
  createdAt: Date,
  updatedAt: Date,
}

export interface BuyerCreationAttributes extends Optional<BuyerAttributes, 'id'> {}
