import React, { useState } from "react";
import "./Flights.css";
import "date-fns";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";

function Flights() {
  const [quotes, setQuotes] = useState([]);
  const [Destination, setDestination] = useState("");
  const [Origin, setOrigin] = useState("");
  const [outDate, setDate] = React.useState(new Date("2020-09-11"));
  const qDestination = {
    destinationplace: Destination,
  };
  const qOrigin = {
    originplace: Origin,
  };
  const qDate = {
    outboundpartialdate: outDate,
  };

  const handleDateChange = (date) => {
    setDate(date);
  };

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
        "https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/US/USD/en-US/?" +
          new URLSearchParams(qDestination) +
          new URLSearchParams(qOrigin) +
          new URLSearchParams(qDate),
        reqOptions
      );
      response = await response.json();
      setQuotes(response.quotes);
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
        <button className="search">Submit</button>
      </form>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Grid container justify="space-around">
          <KeyboardDatePicker
            disableToolbar
            variant="inline"
            format="yyyy-MM-dd"
            margin="normal"
            id="datePicker"
            label="Date Picker"
            value={outDate}
            onChange={handleDateChange}
            KeyboardButtonProps={{
              "aria-label": "change date",
            }}
          />
        </Grid>
      </MuiPickersUtilsProvider>
    </div>
  );
}

export default Flights;
