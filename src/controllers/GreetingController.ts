import { Request, Response } from 'express';
import { VmoControllerAction, VmoController, RequestMethod } from 'vmo/common';

@VmoController('/greeting')
export class GreetingController {
  @VmoControllerAction({ method: RequestMethod.Get, path: '/' })
  getAll(_req: Request, res: Response) {
    return res.json({
      message: 'Hello',
    });
  }
}
