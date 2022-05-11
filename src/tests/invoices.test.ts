import * as sinon from 'sinon';
import * as chai from 'chai';
import chaiHttp = require('chai-http');
import { StatusCodes as codes } from 'http-status-codes';

import { Response } from 'superagent';
import Order from '../database/models/order.model';
import { app } from '../server';
import { invoices } from './mock/invoices';

chai.use(chaiHttp);

const { expect } = chai;

let chaiHttpResp: Response;

describe('Testa se endpoint GET /invoices?userId=<id> em caso de sucesso', () => {
  before(async () => {
    sinon
      .stub(Order, 'findAll')
      .resolves(invoices as unknown as Order[]);

    chaiHttpResp = await chai
      .request(app)
      .get('/invoices?userId=1');
  });

  after( () => {
    (Order.findAll as sinon.SinonStub).restore();
  })

  it('retorna status code 200', () => {
    expect(chaiHttpResp).to.have.status(codes.OK);
  });

  it('retorna um array contendo as informações das notas ficais', () => {
    const response = chaiHttpResp.body;
    expect(response).to.be.an('array');
    response.forEach((invoice: Order, index: number) => {
      expect(invoice).to.be.an('object');
      expect(invoice)
        .to.have.an.keys(
          ['id', 'nNf', 'buyer', 'provider', 'emissionDate', 'value', 'orderStatusBuyer']
        );
      expect(invoice.buyer).to.have.a.key('name');
      expect(invoice.provider).to.have.an.keys(['name', 'tradingName', 'cnpj']);
      expect(invoice).to.be.deep.equal(invoices[index])
    })
  })
});
