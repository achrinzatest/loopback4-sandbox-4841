import {oas} from '@loopback/openapi-v3';
import {param, post} from '@loopback/rest';
import {Example} from '../models';

/**
 * A simple controller to bounce back http requests
 */
export class ExampleController {
  constructor() {}

  @post('/example', {
    responses: {
      '204': {
        description: 'Hello world',
      },
    },
  })
  example(@param.query.number('test') test: number): void {}

  @post('/example-oas-model')
  @oas.response(204, Example)
  exampleOAS(@param.query.number('test') test: number): void {}

  @post('/example-oas-responseobject')
  @oas.response(204, {
    type: 'string',
    description: 'Hello world',
  })
  exampleOASResponseObject(@param.query.number('test') test: number): void {}
}
