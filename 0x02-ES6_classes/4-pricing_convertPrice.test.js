import Pricing from './4-pricing';

test('convertPrice is implemented correctly', () => {
  expect(Pricing.convertPrice(100, 2)).toBe(200);
});
