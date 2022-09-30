import express, { Express, RequestHandler } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { attachControllers, Type } from '@decorators/express';

export class App {
  public app: Express;

  private _attach: typeof attachControllers;

  private _routes: Type[];

  constructor() {
    this.app = express();
    this._attach = attachControllers;
    this._routes = [];
    this._config();
  }

  private _config(): void {
    const accessControl: RequestHandler = (_req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
      res.header('Access-Control-Allow-Headers', '*');
      next();
    };

    this.app.use(accessControl);
    this.app.use(bodyParser.json());
    this.app.use(cors());
  }

  public setRouter(routerParams: Type[]): void {
    this._attach(this.app, routerParams);
  }

  public start(PORT: string | number):void {
    this.app.listen(PORT, () => {
      console.log(`Listening on port ${PORT}`);
    });
  }
}
