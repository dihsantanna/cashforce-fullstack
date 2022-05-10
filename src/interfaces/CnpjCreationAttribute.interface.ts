import { Optional } from 'sequelize';

export interface CnpjAttributes {
  id: number,
  cnpj: string,
  companyType: string,
  createdAt: Date,
  updatedAt: Date,
}

export type CnpjCreationAttributes = Optional<CnpjAttributes, 'id'>;
