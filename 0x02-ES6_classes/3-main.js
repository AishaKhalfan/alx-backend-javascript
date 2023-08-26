import Currency from "./3-currency.js";

const dollar = new Currency('$', 'Dollars');
const shilling = new Currency('sh', 'Shillings');
console.log(dollar.displayFullCurrency());
console.log(shilling.displayFullCurrency());
