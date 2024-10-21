import React from "react";
import MuiAside from "./Component/MuiAside";
import MuiMain from "./Component/MuiMain";
import MuiRight from "./Component/MuiRight";
import { Box, CssBaseline, Stack } from "@mui/material";
import MuiNav from "./Component/MuiNav";

function App() {
  return (
    <>
      <CssBaseline />
      <Box>
        <MuiNav />
        <Stack direction={"row"} justifyContent={"space-evenly"} gap={2}>
          <MuiAside />
          <MuiMain />
          <MuiRight />
        </Stack>
      </Box>
    </>
  );
}

export default App;
