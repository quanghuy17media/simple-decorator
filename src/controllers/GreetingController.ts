import { Request, Response } from 'express';
import { VmoControllerAction, VmoController, RequestMethod } from 'vmo/common';
import { checkHealth } from '../services/test.service';
import { search } from '../services/second.service';

@VmoController('/greeting')
export class GreetingController {
  @VmoControllerAction({ method: RequestMethod.Get, path: '/' })
  async getAll(_req: Request, res: Response) {
    const h = await checkHealth();
    return res.json({
      message: h,
    });
  }

  @VmoControllerAction({ method: RequestMethod.Get, path: '/test' })
  async getTest(_req: Request, res: Response) {
    const h = await search();
    return res.json({
      message: h,
    });
  }
}
