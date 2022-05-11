import {
  Table,
  Column,
  Model,
  ForeignKey,
  BelongsTo,
  HasMany,
  DataType,
} from 'sequelize-typescript';
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
  @Column(DataType.STRING)
    name: string;

  @Column(DataType.STRING)
    tradingName: string;

  @Column(DataType.STRING)
    cashforceTax: string;

  @Column(DataType.STRING)
    responsibleName:string;

  @Column(DataType.STRING)
    responsibleEmail: string;

  @Column(DataType.STRING)
    responsiblePosition: string;

  @Column(DataType.STRING)
    responsiblePhone: string;

  @Column(DataType.STRING)
    responsibleMobile: string;

  @Column(DataType.STRING)
    website: string;

  @Column(DataType.STRING)
    postalCode: string;

  @Column(DataType.STRING)
    address: string;

  @Column(DataType.STRING)
    number: string;

  @Column(DataType.STRING)
    complement: string;

  @Column(DataType.STRING)
    neighborhood: string;

  @Column(DataType.STRING)
    city: string;

  @Column(DataType.STRING)
    bank: string;

  @Column(DataType.STRING)
    bankAgency: string;

  @Column(DataType.STRING)
    account: string;

  @Column(DataType.STRING)
    state: string;

  @Column(DataType.STRING)
    phoneNumber: string;

  @Column(DataType.STRING)
    situation: string;

  @Column(DataType.STRING)
    situationDate: string;

  @ForeignKey(() => Cnpj)
  @Column(DataType.INTEGER)
    cnpjId: number;

  @BelongsTo(() => Cnpj)
    cnpj: Cnpj;

  @Column(DataType.STRING)
    email: string;

  @HasMany(() => Offer)
    offers: Offer[];
}

export default Sponsor;
