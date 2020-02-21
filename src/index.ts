import 'reflect-metadata';
import express, { Request, Response } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import './global.cfg';
import { IRouteDefinition } from 'vmo/common';
import * as vControllers from './controllers';

const main = async () => {
  const { configId, nodePort, nodeHost } = global.gConfig;
  const app = express();
  const corsConfig = {
    credentials: true,
    origin: global.gConfig.clientUrl,
  };

  app.use(cors(corsConfig));
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());

  Object.values(vControllers).forEach(Ctl => {
    const instance = new Ctl();
    const prefix = Reflect.getMetadata('vPrefix', Ctl);
    const routes: IRouteDefinition[] = Reflect.getMetadata('vRoutes', Ctl);
    routes.forEach(route => {
      app[route.requestMethod](
        prefix + route.path,
        (req: Request, res: Response) => {
          (instance as any)[route.methodName](req, res);
        },
      );
    });
  });

  app.listen(nodePort, () => {
    const envMsg = `Environment: ${configId}`;
    const debugMsg = `Debug mode: ${process.env.DEBUG ||
      false} (Set DEBUG environment variable to enable/disable)`;
    const msg = `🚀 Server ready at http://${nodeHost}:${nodePort}`;
    const line = '='.repeat(debugMsg.length);
    console.log(`${line}\n${envMsg}\n${debugMsg}\n${msg}\n${line}`);
  });
};

main();
