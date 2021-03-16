import React from "react";
import "./Flights";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  table: {
    maxHeight: 700,
    width: 1000,
  },

  paper: {
    marginTop: 100,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 1000,
    margin: 75,
    boxShadow: "0 0 5px 5px rgba(1, 22, 39, .1)",
    background: "rgba(253, 255, 252, .9)",
  },

  header: {
    background: "rgb(173, 232, 244)",
    fontSize: "15px",
    fontFamily: "Segoe UI",
    fontWeight: "bold",
  },
});

function Quotes(props) {
  const classes = useStyles();

  return (
    <TableContainer className={classes.paper} component={Paper}>
      <div className={classes.table}>
        <Table stickyHeader aria-label="simple table">
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
                <TableCell component="th" scope="row">
                  {quote.QuoteId}
                </TableCell>
                <TableCell className={classes.price} align="right">
                  {quote.MinPrice}
                </TableCell>
                <TableCell align="right">
                  {quote.OutboundLeg.DepartureDate}
                </TableCell>
                <TableCell align="right">
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
