import { percentages } from "./data";

const Amounts = ({ tipAmount, totalAmount, onReset }) => {
  return (
    <div className="amounts">
      <div className="amount-container">
        <div>
          <p className="amount-title">Tip Amount</p>
          <span className="per-person">/ person</span>
        </div>
        <div>
          <p className="amount">{tipAmount}</p>
        </div>
      </div>

      <div className="amount-container">
        <div>
          <p className="amount-title">Total</p>
          <span className="per-person">/ person</span>
        </div>
        <div>
          <p className="amount">{totalAmount}</p>
        </div>
      </div>

      <button
        className="btn btn-reset"
        onClick={onReset}
      >
        RESET
      </button>
    </div>
  )
}
export default Amounts;