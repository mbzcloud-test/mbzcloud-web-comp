//import { greet } from '../src';

it('console.log the text "Hello, World!"', () => {
  console.log = jest.fn();
  log('Hello, World!');
  expect(console.log).toHaveBeenCalledWith('Hello, World!');
});
