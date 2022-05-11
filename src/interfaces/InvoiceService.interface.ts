import { Invoice } from './Invoice.interface';

export interface InvoiceService {
  getInvoices(): Promise<Invoice[]>;
}
