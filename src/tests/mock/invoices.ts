const buyerName = 'SACADO 001';
const providerName = 'CEDENTE 002';
const tradingName = 'CEDENTE 002 LTDA';
const cnpj = '00000000000002';

export const invoices = [
  {
    id: 1,
    nNf: '18153',
    buyer: {
      name: buyerName,
    },
    provider: {
      name: providerName,
      tradingName,
      cnpj,
    },
    emissionDate: '2020-10-30T11:00:00-03:00',
    value: '198450',
    orderStatusBuyer: '0',
  },
  {
    id: 2,
    nNf: '18157',
    buyer: {
      name: buyerName,
    },
    provider: {
      name: providerName,
      tradingName,
      cnpj,
    },
    emissionDate: '2020-11-04T15:32:35-02:00',
    value: '168850',
    orderStatusBuyer: '0',
  },
  {
    id: 3,
    nNf: '18184',
    buyer: {
      name: buyerName,
    },
    provider: {
      name: providerName,
      tradingName,
      cnpj,
    },
    emissionDate: '2020-11-10',
    value: '222795',
    orderStatusBuyer: '7',
  },
];
