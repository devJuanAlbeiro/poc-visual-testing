import { Box } from "@mui/material";
import Link from "@mui/material/Link";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import * as React from "react";

import Title from "./Title";

// Generate Order Data
function createData(
  id: number,
  date: string,
  name: string,
  shipTo: string,
  paymentMethod: string,
  percyColumn: string,
  amount: number
) {
  return { amount, date, id, name, paymentMethod, percyColumn, shipTo };
}

const rows = [
  createData(
    0,
    "16 Mar, 2019",
    "Elvis Presley",
    "Tupelo, MS",
    "VISA ⠀•••• 3719",
    "Percy Data 1",
    312.44
  ),
  createData(
    1,
    "16 Mar, 2019",
    "Paul McCartney",
    "London, UK",
    "VISA ⠀•••• 2574",
    "Percy Data 2",
    866.99
  ),
  createData(
    2,
    "16 Mar, 2019",
    "Tom Scholz",
    "Boston, MA",
    "MC ⠀•••• 1253",
    "Percy Data 3",
    100.81
  ),
  createData(
    3,
    "16 Mar, 2019",
    "Michael Jackson",
    "Gary, IN",
    "AMEX ⠀•••• 2000",
    "Percy Data 4",
    654.39
  ),
  createData(
    4,
    "15 Mar, 2019",
    "Bruce Springsteen",
    "Long Branch, NJ",
    "VISA ⠀•••• 5919",
    "Percy Data 5",
    212.79
  ),
];

function preventDefault(event: React.MouseEvent) {
  event.preventDefault();
}

export default function OrdersModified() {
  return (
    <React.Fragment>
      <Title>Recent Orders</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Ship To</TableCell>
            <TableCell>Payment Method</TableCell>
            <TableCell align="center">Percy Column</TableCell>
            <TableCell
              data-cy="sale-amount-table-cell"
              data-testid="sale-amount-table-cell"
              align="right"
              sx={{ color: "blue", fontWeight: "bold", fontStyle: "italic" }}
            >
              Sale Amount
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell sx={{ backgroundColor: "yellow" }}>
                {row.name}
              </TableCell>
              <TableCell>{row.shipTo}</TableCell>
              <TableCell>{row.paymentMethod}</TableCell>
              <TableCell align="center">{row.percyColumn}</TableCell>
              {row.amount > 110 ? (
                <TableCell align="right">{`$${row.amount}`}</TableCell>
              ) : (
                <TableCell
                  data-cy="sale-amount-red-table-cell"
                  data-testid="sale-amount-red-table-cell"
                  sx={{ color: "red", fontWeight: "bold", fontStyle: "italic" }}
                  align="right"
                >{`$${row.amount}`}</TableCell>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Box
        data-cy="see-more-orders-link"
        data-testid="see-more-orders-link"
        sx={{
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
          See more orders
        </Link>
      </Box>
    </React.Fragment>
  );
}
