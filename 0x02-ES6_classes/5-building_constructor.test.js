import Building from './5-building.js';

test('building is implemented correctly', () => {
  const building = new Building(200);
  expect(building.sqft).toBe(200);
});
