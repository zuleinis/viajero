import React, { useState } from "react";
import "./Flights.css";
import Quotes from "./Quotes";

function Flights() {
  const [quotes, setQuotes] = useState([]);
  const [Destination, setDestination] = useState("");
  const [Origin, setOrigin] = useState("");
  const [oDate, setoDate] = useState("");
  const [Currency, setCurrency] = useState("");

  const qString =
    Currency + "/en-US/" + Destination + "/" + Origin + "/" + oDate;

  function handleSubmit(e) {
    e.preventDefault();
    async function fetchMyAPI() {
      const reqOptions = {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "77d6e6582fmsh182374a4e32e3eep181d8djsn1133a8fa64cb",
          "x-rapidapi-host":
            "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
          useQueryString: true,
        },
      };

      let response = await fetch(
        "https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/US/" +
          qString,
        reqOptions
      );
      response = await response.json();
      console.log(response.Quotes);
      setQuotes(response.Quotes);
    }
    fetchMyAPI();
  }

  return (
    <div className="flights">
      <form onSubmit={handleSubmit}>
        <label className="font" htmlFor="destinationInput">
          Find flights to
        </label>
        <input
          className="input"
          placeholder="E.g. SJU"
          id="destinationInput"
          value={Destination}
          onChange={(e) => setDestination(e.target.value)}
          required
        />
        <label className="font" htmlFor="originInput">
          from
        </label>
        <input
          className="input"
          placeholder="E.g. JFK"
          id="originInput"
          value={Origin}
          onChange={(e) => setOrigin(e.target.value)}
          required
        />
        <label className="font" htmlFor="dateInput">
          on
        </label>
        <input
          className="input"
          placeholder="YYYY-MM-DD"
          id="dateInput"
          value={oDate}
          onChange={(e) => setoDate(e.target.value)}
          required
        />
        <label className="font" htmlFor="currencyInput">
          in
        </label>
        <input
          className="input"
          placeholder="E.g. USD"
          id="currencyInput"
          value={Currency}
          onChange={(e) => setCurrency(e.target.value)}
          required
        />
        <button className="search">Search</button>
      </form>
      <Quotes quotes={quotes}></Quotes>
    </div>
  );
}

export default Flights;
