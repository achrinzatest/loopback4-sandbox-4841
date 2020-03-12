import {param, post} from '@loopback/rest';

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
}
