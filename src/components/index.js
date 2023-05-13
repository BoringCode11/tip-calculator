import Billing from "./Billing";
import Amounts from "./Amounts";

const calcTipAmount = (bill, tip, numPeople) => {
  return (numPeople === 0) ? 0 : bill * (tip / 100) / numPeople;
}

const calcTotalAmount = (bill, numPeople) => {
  return (numPeople === 0) ? 0 : bill / numPeople;
}

export { Billing, Amounts, calcTipAmount, calcTotalAmount };