import {LoopBack4Sandbox4841Application} from './application';
import {ApplicationConfig} from '@loopback/core';

export {LoopBack4Sandbox4841Application};

export async function main(options: ApplicationConfig = {}) {
  const app = new LoopBack4Sandbox4841Application(options);
  await app.boot();
  await app.start();

  const url = app.restServer.url;
  console.log(`Server is running at ${url}`);
  console.log(`Try ${url}/ping`);

  return app;
}
