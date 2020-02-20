import 'reflect-metadata';
import express, { Request, Response } from 'express';
import cors from 'cors';
import config from 'config';

const main = async () => {
  global.gConfig = config.get('appConfig');
  const { configId, nodePort, nodeHost } = global.gConfig;

  const app = express();
  const corsConfig = {
    credentials: true,
    origin: global.gConfig.clientUrl,
  };

  app.use(cors(corsConfig));

  app.get('/', (req: Request, res: Response) => {
    res.send('Meooo!');
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
