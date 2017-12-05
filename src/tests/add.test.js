const add = (a, b) => a + b;

const generateGreeting = name => `Hello ${name}!`;

test('should add to numbers', () => {
  const result = add(3, 4);
  expect(result).toBe(7);
});

test('Should Greet The Person', () => {
  const greet = generateGreeting('Weslley');
  expect(greet).toBe('Hello Weslley!');
});
