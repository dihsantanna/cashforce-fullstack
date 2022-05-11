import 'reflect-metadata';
import { server } from './routes';
import 'dotenv/config';

const PORT = process.env.PORT as string;

server.start(PORT);
