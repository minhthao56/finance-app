import React from "react";

import "./Expense.scss";

export default function Expense() {
  return (
    <div>
      <div>
        <form>
          <input type="text" />
          <input type="text" placeholder="Select category" />
          <input type="text" placeholder="Description" />
          <input type="text" placeholder="Choose date" />
          <input type="text" placeholder="Choose Cash wallet" />
          <button type="submit">Save</button>
        </form>
      </div>
    </div>
  );
}
