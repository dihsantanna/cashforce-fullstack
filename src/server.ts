import 'reflect-metadata';
import { App } from './app';
import 'dotenv/config';
import { InvoiceController } from './api/controllers/invoice.controllers';

const PORT = process.env.PORT as string;

const server = new App();

server.setRouter([InvoiceController]);

export const { app } = server;

server.start(PORT);
