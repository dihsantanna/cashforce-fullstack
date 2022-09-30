import 'reflect-metadata';
import { App } from './app';
import { InvoiceController } from './api/controllers/invoice.controllers';

const server = new App();

server.setRouter([InvoiceController]);

export { server };

export const { app } = server;
// utilizado para realização dos testes
