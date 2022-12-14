import dotenv = require('dotenv');
import 'reflect-metadata';
import { server } from './routes';

dotenv.config();

const PORT = process.env.PORT || 3001;

server.start(PORT);
