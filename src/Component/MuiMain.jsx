import { Box } from "@mui/material";
import React from "react";
import MuiCard from "./MuiCard";

function MuiMain() {
  return (
    <Box flex={4} p={2}>
      <MuiCard />
      <MuiCard />
      <MuiCard />
      <MuiCard />
    </Box>
  );
}

export default MuiMain;
