import { Request, Response } from 'express';
import { VmoControllerAction, VmoController, RequestMethod } from 'vmo/common';

interface IPingOneRequest extends Request {
  params: {
    id: string;
  };
}
@VmoController('/ping')
export class PingController {
  @VmoControllerAction({ method: RequestMethod.Get, path: '/' })
  getAll(_req: Request, res: Response) {
    return res.json({
      description: 'Ping all',
      data: [
        /**/
      ],
    });
  }

  @VmoControllerAction({ method: RequestMethod.Get, path: '/:id' })
  getOne(req: IPingOneRequest, res: Response) {
    return res.json({
      description: `Ping one by ${req.params.id}`,
      data: {
        /**/
      },
    });
  }
}
