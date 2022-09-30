import { Controller as Control, Get, Query, Response as Res } from '@decorators/express';
import { Response } from 'express';
import { StatusCodes as codes } from 'http-status-codes';
import { GenericError } from '../../interfaces/GenericError.interface';
import { InvoiceServices } from '../services/invoice.services';
import { InvoiceController as Controller } from '../../interfaces/InvoiceController.interface';

const errorMsg = { message: 'It is necessary to pass a value for query ?userId=' };

@Control('/invoices')
class InvoiceController implements Controller {
  constructor(protected service = new InvoiceServices()) {}

  @Get('')
  async getInvoices(@Res() res: Response, @Query('userId') userId: string): Promise<void> {
    try {
      if (!userId) {
        res.status(codes.OK).json(errorMsg);
        return;
      }
      const { code, response } = await this.service.getInvoices(+userId);
      res.status(code).json(response);
    } catch (error) {
      res.status(500).json({ message: (error as GenericError).message });
    }
  }
}

export { InvoiceController };
