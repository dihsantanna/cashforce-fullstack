import { ValidationError } from 'joi';
import { GenericError } from './GenericError.interface';

export interface ServiceReturn<T> {
  code: number,
  response: T | T[] | ValidationError | GenericError,
}