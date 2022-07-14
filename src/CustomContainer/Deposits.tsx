import { Box } from "@mui/material";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import * as React from "react";

import Title from "./Title";

function preventDefault(event: React.MouseEvent) {
  event.preventDefault();
}

export default function Deposits() {
  return (
    <React.Fragment>
      <Title>Recent Deposits</Title>
      <Typography
        data-cy="deposit-value"
        data-testid="deposit-value"
        component="p"
        variant="h4"
      >
        $7,249.01
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        on 15 March, 2019
      </Typography>
      <Box
        data-cy="view-balance-deposits-link"
        data-testid="view-balance-deposits-link"
        sx={{
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <Link color="primary" href="#" onClick={preventDefault}>
          View balance
        </Link>
      </Box>
    </React.Fragment>
  );
}
