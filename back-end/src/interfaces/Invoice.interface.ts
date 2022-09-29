export interface Invoice {
  id: number,
  nNf: string,
  buyer: {
    name: string,
  },
  provider: {
    name: string,
    tradingName: string,
    cnpj: {
      cnpj: string,
    }
  },
  emissionDate: string,
  value: string,
  orderStatusBuyer: string
}
