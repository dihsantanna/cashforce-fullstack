import { Optional } from 'sequelize';

export interface GenericAttributes {
  id: number;
};

export interface GenericCreationAttributes extends Optional<GenericAttributes, 'id'> {}