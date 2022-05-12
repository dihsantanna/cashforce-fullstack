import 'reflect-metadata';
import { server } from './routes';
import 'dotenv/config';

const PORT = process.env.PORT || 3001;

server.start(PORT);
