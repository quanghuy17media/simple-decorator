import { Request, Response } from 'express';
import { VmoControllerAction, VmoController, RequestMethod } from 'vmo/common';
import { checkHealth, indexData, search } from '../services/test.service';
import { IIndexSomeDataReq, ISearchReq } from '../types/customTypes';

@VmoController('/greeting')
export class GreetingController {
  @VmoControllerAction({ method: RequestMethod.Get, path: '/' })
  async getAll(_req: Request, res: Response) {
    const h = await checkHealth();
    return res.json({
      message: h,
    });
  }

  @VmoControllerAction({ method: RequestMethod.Post, path: '/index-data' })
  async indexSomeData(req: IIndexSomeDataReq, res: Response) {
    // const d1: RequestParams.Index = {
    //   index: 'product',
    //   body: {
    //     name: 'laptop hp',
    //     price: 2000,
    //   },
    // };
    const d = await indexData(req.body);
    return res.json(d);
  }

  @VmoControllerAction({ method: RequestMethod.Post, path: '/search' })
  async search(req: ISearchReq, res: Response) {
    // const d1: RequestParams.Search = {
    //   index: 'product',
    //   body: { query: { match: { name: 'laptop' } } },
    // };
    const data = await search(req.body);
    return res.json({ data });
  }

  // @VmoControllerAction({ method: RequestMethod.Get, path: '/test' })
  // async getTest(_req: Request, res: Response) {
  //   const test: Test = DIContainer.resolve<Test>(Test);
  //   const h = await test.checkHealth();
  //   return res.json({
  //     message: h,
  //   });
  // }
}
