import  {  Optional  }  from  'sequelize'

export interface CnpjAttributes {
  id: number,
  cnpj: string,
  companyType: string,
  createdAt: Date,
  updatedAt: Date,
}

export interface CnpjCreationAttributes extends Optional<CnpjAttributes, 'id'> {}
