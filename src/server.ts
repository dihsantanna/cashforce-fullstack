import { App } from './app';
import 'dotenv/config';
import 'reflect-metadata';

const PORT = process.env.PORT as string;

const server = new App();

export const { app } = server;

server.start(PORT);
