import { Table, Column, Model, ForeignKey, BelongsTo, HasMany } from 'sequelize-typescript';
import { DataTypes } from 'sequelize';
import {
  SponsorAttributes,
  SponsorCreationAttributes,
} from '../../interfaces/SponsorCreationAttribute.interface';
import Cnpj from './cnpj.model';
import Offer from './offer.model';

@Table({
  timestamps: true,
  modelName: 'Sponsor',
  tableName: 'sponsors',
  charset: 'latin1',
})
class Sponsor extends Model<SponsorAttributes, SponsorCreationAttributes> {
  @Column(DataTypes.STRING)
    name: string;

  @Column(DataTypes.STRING)
    tradingName: string;

  @Column(DataTypes.STRING)
    cashforceTax: string;

  @Column(DataTypes.STRING)
    responsibleName:string;

  @Column(DataTypes.STRING)
    responsibleEmail: string;

  @Column(DataTypes.STRING)
    responsiblePosition: string;

  @Column(DataTypes.STRING)
    responsiblePhone: string;

  @Column(DataTypes.STRING)
    responsibleMobile: string;

  @Column(DataTypes.STRING)
    website: string;

  @Column(DataTypes.STRING)
    postalCode: string;

  @Column(DataTypes.STRING)
    address: string;

  @Column(DataTypes.STRING)
    number: string;

  @Column(DataTypes.STRING)
    complement: string;

  @Column(DataTypes.STRING)
    neighborhood: string;

  @Column(DataTypes.STRING)
    city: string;

  @Column(DataTypes.STRING)
    bank: string;

  @Column(DataTypes.STRING)
    bankAgency: string;

  @Column(DataTypes.STRING)
    account: string;

  @Column(DataTypes.STRING)
    state: string;

  @Column(DataTypes.STRING)
    phoneNumber: string;

  @Column(DataTypes.STRING)
    situation: string;

  @Column(DataTypes.STRING)
    situationDate: string;

  @ForeignKey(() => Cnpj)
  @Column(DataTypes.INTEGER)
    cnpjId: number;

  @BelongsTo(() => Cnpj)
    cnpj: Cnpj;

  @Column(DataTypes.STRING)
    email: string;

  @HasMany(() => Offer)
    offers: Offer[];
}

export default Sponsor;
