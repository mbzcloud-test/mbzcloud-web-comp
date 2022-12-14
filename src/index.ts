// named export
const greetings =
  'Hello World!, Greetings from the latest mbzcloud-web-comp Github package.';

// default export
const sum = (a: number, b: number) => {
  return 'The sum of two numbers is: ' + (a + b);
};

const multiply = (a: number, b: number) => {
  return 'The multiplication of two numbers is: ' + a * b;
};

const subtract = (a: number, b: number) => {
  return 'The subtraction of two numbers is: ' + (a - b);
};

export default { greetings, sum, multiply, subtract };
