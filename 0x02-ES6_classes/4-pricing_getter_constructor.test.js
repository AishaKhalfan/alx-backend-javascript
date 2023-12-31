import Currency from './3-currency';
import Pricing from './4-pricing';

const dollar = new Currency('$', 'Dollars');

test('pricing is implemented correctly', () => {
  const price = new Pricing(100, dollar);
  expect(price.amount).toBe(100);
  expect(price.currency).toBe(dollar);
  expect(price.displayFullPrice()).toBe('100 Dollars ($)');
});
