import { Optional } from 'sequelize';

export interface GenericAttributes {
  id: number;
}

export type GenericCreationAttributes = Optional<GenericAttributes, 'id'>;
