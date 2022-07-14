import "./App.css";
import { FC } from "react";
import CustomContainer from "./CustomContainer/CustomContainer";

const App: FC = () => {
  return (
    <div className="App">
      {/* <Box
        data-cy="title-demo-percy"
        data-testid="title-demo-percy"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignContent: 'center'
        }}
      >
        <Typography
          sx={{ color: "blue", marginTop: 7 }}
          data-cy="deposit-value"
          data-testid="deposit-value"
          component="p"
          variant="h4"
        >
          POC - Visual Testing - Percy
        </Typography>
      </Box> */}
      <CustomContainer />
    </div>
  );
};

export default App;
