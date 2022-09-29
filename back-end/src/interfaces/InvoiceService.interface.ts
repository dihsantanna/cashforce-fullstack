import { Invoice } from './Invoice.interface';

export interface InvoiceServiceReturn {
  code: number,
  response: Invoice[]
}

export interface InvoiceService {
  getInvoices(userId: number): Promise<InvoiceServiceReturn>;
}
