import { Model } from 'sequelize-typescript';
import {
  GenericAttributes,
  GenericCreationAttributes,
} from '../../interfaces/GenericCreationAttribute.interface';
import { ServiceReturn } from '../../interfaces/ServiceReturn.interface';

export abstract class Service {
  constructor(private _model: Model<GenericAttributes, GenericCreationAttributes>) {}

  abstract getById(id: number): Promise<ServiceReturn<typeof this._model>>;

  abstract getAll(): Promise<ServiceReturn<typeof this._model>>;
}
