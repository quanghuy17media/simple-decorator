import { Request, Response } from 'express';
import { ControllerAction, Controller, RequestMethod } from 'vmo/common';

@Controller('/greeting')
export class GreetingController {
  @ControllerAction({ method: RequestMethod.Get, path: '/' })
  getAll(_req: Request, res: Response) {
    return res.json({
      message: 'Hello',
    });
  }
}
