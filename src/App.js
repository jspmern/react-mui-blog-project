import React from "react";
import MuiAside from "./Component/MuiAside";
import MuiMain from "./Component/MuiMain";
import MuiRight from "./Component/MuiRight";
import { Box, CssBaseline, Stack } from "@mui/material";

function App() {
  return (
    <>
      <CssBaseline />
      <Box>
        {/* //navbar */}
        <Stack direction={"row"} justifyContent={"space-evenly"}>
          <MuiAside />
          <MuiMain />
          <MuiRight />
        </Stack>
      </Box>
    </>
  );
}

export default App;
