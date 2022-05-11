import { Injectable, Inject } from '@decorators/di';
import { StatusCodes as codes } from 'http-status-codes';
import { Invoice } from '../../interfaces/Invoice.interface';
import Buyer from '../../database/models/buyer.model';
import Provider from '../../database/models/provider.model';
import Order from '../../database/models/order.model';
import {
  InvoiceService as Service,
  InvoiceServiceReturn,
} from '../../interfaces/InvoiceService.interface';
import Cnpj from '../../database/models/cnpj.model';

const order = Order;

@Injectable()
class InvoiceServices implements Service {
  constructor(@Inject(order) protected model: typeof order) {}

  async getInvoices(userId: number): Promise<InvoiceServiceReturn> {
    const response = await this.model.findAll({
      where: {
        userId,
      },
      include: [{
        model: Buyer, as: 'buyer', attributes: ['name'],
      }, {
        model: Provider,
        as: 'provider',
        attributes: ['name', 'tradingName'],
        include: [{ model: Cnpj, attributes: ['cnpj'] }],
      }],
    }) as unknown as Invoice[];
    return { code: codes.OK, response };
  }
}

export { InvoiceServices };
