import { Box } from "@mui/material";
import React from "react";

function MuiRight() {
  return (
    <Box
      flex={2}
      bgcolor={"blue"}
      p={2}
      sx={{ display: { xs: "none", sm: "block" } }}
    >
      MuiRight
    </Box>
  );
}

export default MuiRight;
