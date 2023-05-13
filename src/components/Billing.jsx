import { useState } from "react";
import { percentages } from "./data";

const Billing = ({ bill, numPeople, setBill, setTip, setNumPeople }) => {
  const [percentages_, setPercentages] = useState(percentages);

  const onSelect = (id) => {
    const newPercentages = [...percentages].map(percentage => (
      (percentage.id === id) ? { ...percentage, selected: true } : { ...percentage }
    ));

    setPercentages(newPercentages);
  }

  return (
    <div className="billing">
      <div className="bill-amount">
        <span className="lable">Bill</span>
        <input
          value={bill}
          onChange={setBill}
          type="number"
          placeholder="0"
          className="input"
        />
      </div>

      <div className="tip-section">
        <span className="label">Select Tip %</span>

        <div className="tip-amounts">
          {percentages_.map(percentage => (
            <button
              key={percentage.id}
              className={`btn btn-tip`}
              style={percentage.selected ? { backgroundColor: "hsl(172, 67%, 45%)" } : {}}
              onClick={(e) => {
                setTip(percentage.percentage);
                onSelect(percentage.id);
              }}
            >
              {percentage.percentage}%
            </button>
          ))}

          <input
            onChange={(e) => {
              setTip(e.target.value);
              setPercentages([...percentages]);
            }}
            className="input"
            type="text"
            placeholder="custom"
          />
        </div>
      </div>

      <div className="number-peopele">
        <span className="label">Number of people</span>
        <input
          value={numPeople}
          onChange={setNumPeople}
          type="number"
          className="input"
          placeholder="0"
        />
      </div>
    </div>
  )
}
export default Billing;