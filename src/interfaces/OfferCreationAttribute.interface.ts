import { Optional } from 'sequelize';

export interface OfferAttributes {
  id: number,
  tax: string,
  tariff: string,
  adValorem: string,
  float: string,
  iof: string,
  expiresIn: Date,
  paymentStatusSponsor: number,
  paymentStatusProvider: number,
  orderId: number,
  sponsorId: number,
  createdAt: Date,
  updatedAt: Date,
}

export type OfferCreationAttributes = Optional<OfferAttributes, 'id'>;
