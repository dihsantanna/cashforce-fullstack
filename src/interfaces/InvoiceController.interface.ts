import { Request, Response } from 'express';

export interface InvoiceController {
  getInvoices(req: Request, res: Response): Promise<void>;
}
