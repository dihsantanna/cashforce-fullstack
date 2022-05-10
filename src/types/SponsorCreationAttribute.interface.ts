import  {  Optional  }  from  'sequelize'

export interface SponsorAttributes {
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
  bank: string,
  bankAgency: string,
  account: string,
  state: string,
  phoneNumber: string,
  situation: string,
  situationDate: string,
  cnpjId: number,
  email: string,
  createdAt: Date,
  updatedAt: Date,
}

export interface SponsorCreationAttributes extends Optional<SponsorAttributes, 'id'> {}
