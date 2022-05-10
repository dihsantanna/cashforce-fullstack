import { Controller as controller } from '@decorators/express';
import { Request, Response } from 'express';
import { Service } from '../services';

@controller('')
export abstract class Controller {
  constructor(private _service: Service) {}

  async getById(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const { code, response } = await this._service.getById(+id);
      res.status(code).json(response);
      return;
    } catch (err) {
      res.status(500).json({ message: (err as unknown as Error).message });
    }
  }

  async getAll(_req: Request, res: Response): Promise<void> {
    try {
      const { code, response } = await this._service.getAll();
      res.status(code).json(response);
      return;
    } catch (err) {
      res.status(500).json({ message: (err as unknown as Error).message });
    }
  }
}
