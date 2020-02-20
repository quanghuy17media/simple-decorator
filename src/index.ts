import 'reflect-metadata';
import express, { Request, Response } from 'express';
import cors from 'cors';
import config from 'config';
import { IRouteDefinition } from 'vmo/common';
import * as MainController from './controllers';

const main = async () => {
  global.gConfig = config.get('appConfig');
  const { configId, nodePort, nodeHost } = global.gConfig;

  const app = express();
  const corsConfig = {
    credentials: true,
    origin: global.gConfig.clientUrl,
  };

  app.use(cors(corsConfig));

  Object.values(MainController).forEach(Controller => {
    const instance = new Controller();
    const prefix = Reflect.getMetadata('prefix', Controller);
    const routes: IRouteDefinition[] = Reflect.getMetadata(
      'routes',
      Controller,
    );
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
