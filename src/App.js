import React, { useState } from "react";
import MuiAside from "./Component/MuiAside";
import MuiMain from "./Component/MuiMain";
import MuiRight from "./Component/MuiRight";
import { Box, createTheme, CssBaseline, Stack } from "@mui/material";
import MuiNav from "./Component/MuiNav";
import { ThemeProvider } from "@emotion/react";
import AddComp from "./Component/AddComp";

function App() {
  let [mode, setMode] = useState(false);
  let theme = createTheme({
    palette: {
      mode: !mode ? "light" : "dark",
    },
  });
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box>
          <MuiNav />
          <Stack direction={"row"} justifyContent={"space-evenly"} gap={2}>
            <MuiAside mode={mode} setMode={setMode} />
            <MuiMain />
            <MuiRight />
          </Stack>
          <AddComp />
        </Box>
      </ThemeProvider>
    </>
  );
}

export default App;
