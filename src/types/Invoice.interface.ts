import { Provider } from './Provider.interface';

export interface Invoice {
  id: number;
  nNf: string;
  buyer: {
    name: string;
  };
  provider: Provider;
  emissionDate: string;
  value: string;
  orderStatusBuyer: string;
}
