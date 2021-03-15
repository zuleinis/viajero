import React from "react";
import "./Quotes.css";

function Quotes(props) {
  return (
    <div className="quotes">
      <table>
        <thead>
          <tr>
            <th>Minimum Price</th>
            <th>Nonstop</th>
            <th>Quote ID</th>
          </tr>
        </thead>
        <tbody>
          {props.quotes.map((quote) => {
            return (
              <tr id={quote.QuoteId}>
                <th>{quote.MinPrice}</th>
                <th>{quote.Direct}</th>
                <th>{quote.QuoteId}</th>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Quotes;
