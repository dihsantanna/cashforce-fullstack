import { Response } from 'express';

export interface InvoiceController {
  getInvoices(res: Response, userId: string): Promise<void>;
}
