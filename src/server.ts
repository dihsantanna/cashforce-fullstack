import { App } from './app';
import 'dotenv/config';

const PORT = process.env.PORT as string;

const server = new App();

server.start(PORT);

export const { app } = server;
