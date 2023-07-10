import listOfStudents from './9-hoisting.js';

test('listOfStudents has the correct length', () => {
  expect(listOfStudents).toHaveLength(5);
});
