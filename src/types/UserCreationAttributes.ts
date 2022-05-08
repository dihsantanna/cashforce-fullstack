import  {  Optional  }  from  'sequelize'

export interface UserAttributes {
  id: number,
  name: string,
  email: string,
  phoneNumber: string,
  mobile: string,
  departament: string,
  verificationCode: string,
  createdAt: Date,
  updatedAt: Date,
  emailChecked: number,
  cashforceAdm: number
}

export interface UserCreationAttributes extends Optional<UserAttributes, 'id'> {}
