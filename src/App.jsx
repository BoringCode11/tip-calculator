import { useState } from 'react';
import { Billing, Amounts } from './components';
import { calcTipAmount, calcTotalAmount } from './components';
import './App.css';

const App = () => {
  const [bill, setBill] = useState(0);
  const [tip, setTip] = useState(0);
  const [numPeople, setNumPeople] = useState(0);

  const tipAmount = calcTipAmount(bill, tip, numPeople);
  const totalAmount = calcTotalAmount(bill, numPeople) + tipAmount;

  const onReset = () => {
    setBill(0);
    setTip(0);
    setNumPeople(0);
  }

  return (
    <div className="app">
      <Billing
        bill={bill}
        tip={tip}
        numPeople={numPeople}
        setBill={(e) => setBill(e.target.value)}
        setTip={(percerntage) => setTip(percerntage)}
        setNumPeople={(e) => setNumPeople(e.target.value)}
      />

      <Amounts
        tipAmount={tipAmount.toLocaleString("en-US", { style: "currency", currency: "EUR" })}
        totalAmount={totalAmount.toLocaleString("en-US", { style: "currency", currency: "EUR" })}
        onReset={onReset}
      />
    </div>
  )
}

export default App;