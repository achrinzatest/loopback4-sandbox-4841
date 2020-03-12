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

  @post('/example-oas')
  @oas.response(204, Example)
  example2(@param.query.number('test') test: number): void {}
}
