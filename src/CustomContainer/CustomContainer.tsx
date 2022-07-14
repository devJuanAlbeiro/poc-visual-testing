import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

import Chart from "./Chart";
import Deposits from "./Deposits";
import Orders from "./Orders";

function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Todos Web
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

function DashboardContent() {
  return (
    <Box sx={{ display: "flex" }}>
      <Box
        component="main"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[100]
              : theme.palette.grey[900],
          flexGrow: 1,
          height: "100vh",
          overflow: "auto",
        }}
      >
        <Container maxWidth="lg">
          <Grid>
            <Paper
              sx={{
                display: "flex",
                flexDirection: "column",
                height: 70,
                mt: 2,
                textAlign: 'center',
                justifyContent: 'center',
                color: 'blue'
              }}
            >
              <h1>Visual Testing - Percy</h1>
            </Paper>
          </Grid>
          <Grid container spacing={3} sx={{ mt: 0 }}>
            {/* Chart */}
            <Grid item xs={12} md={8} lg={9}>
              <Paper
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  height: 240,
                  p: 2,
                }}
              >
                <Chart />
              </Paper>
            </Grid>
            {/* Recent Deposits */}
            <Grid item xs={12} md={4} lg={3}>
              <Paper
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  height: 240,
                  p: 2,
                }}
              >
                <Deposits />
              </Paper>
            </Grid>
            {/* Recent Orders */}
            <Grid item xs={12}>
              <Paper sx={{ display: "flex", flexDirection: "column", p: 2 }}>
                <Orders />
              </Paper>
            </Grid>
          </Grid>
          <Copyright sx={{ pt: 4 }} />
        </Container>
      </Box>
    </Box>
  );
}

export default function CustomContainer() {
  return <DashboardContent />;
}
