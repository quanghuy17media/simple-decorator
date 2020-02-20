import { Request, Response } from 'express';
import { ControllerAction, Controller, RequestMethod } from 'vmo/common';

interface IPingOneRequest extends Request {
  params: {
    id: string;
  };
}
@Controller('/ping')
export class PingController {
  @ControllerAction({ method: RequestMethod.Get, path: '/' })
  getAll(_req: Request, res: Response) {
    return res.json({
      description: 'Ping all',
      data: [
        /**/
      ],
    });
  }

  @ControllerAction({ method: RequestMethod.Get, path: '/:id' })
  getOne(req: IPingOneRequest, res: Response) {
    return res.json({
      description: `Ping one by ${req.params.id}`,
      data: {
        /**/
      },
    });
  }
}
