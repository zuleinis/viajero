import React from "react";
import "./Flights";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

//Table Styling
const useStyles = makeStyles({
  table: {
    height: 425,
    width: 875,
    display: "flex",
  },

  paper: {
    marginTop: 30,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 875,
    boxShadow: "0 0 5px 5px rgba(1, 22, 39, .1)",
    background: "rgba(253, 255, 252, .9)",
  },

  header: {
    background: "#6699c8",
    fontSize: "17px",
    fontFamily: "Segoe UI",
    fontWeight: "bold",
    color: "white",
  },

  price: {
    color: "#01ba00",
    fontFamily: "Segoe UI",
    fontWeight: "bold",
    fontSize: "17px",
  },

  font: {
    fontFamily: "Segoe UI",
    fontSize: "17px",
  },
});

//Function that generates a table with flights information
function Quotes(props) {
  const classes = useStyles();

  return (
    <TableContainer className={classes.paper} component={Paper}>
      <div className={classes.table}>
        <Table stickyHeader aria-label="flights table">
          <TableHead>
            <TableRow>
              <TableCell className={classes.header}>Flight</TableCell>
              <TableCell className={classes.header} align="right">
                Price
              </TableCell>
              <TableCell className={classes.header} align="right">
                Departure Date (yyyy-mm-dd)
              </TableCell>
              <TableCell className={classes.header} align="right">
                Carrier ID
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.quotes.map((quote) => (
              <TableRow key={quote.QuoteId}>
                <TableCell className={classes.font} component="th" scope="row">
                  {quote.QuoteId}
                </TableCell>
                <TableCell className={classes.price} align="right">
                  {quote.MinPrice}
                </TableCell>
                <TableCell className={classes.font} align="right">
                  {quote.OutboundLeg.DepartureDate}
                </TableCell>
                <TableCell className={classes.font} align="right">
                  {quote.OutboundLeg.CarrierIds}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </TableContainer>
  );
}
export default Quotes;
