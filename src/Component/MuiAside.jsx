import { Box } from "@mui/material";
import React from "react";

function MuiAside() {
  return (
    <Box
      flex={1}
      bgcolor={"yellow"}
      p={2}
      sx={{ display: { xs: "none", sm: "block" } }}
    >
      MuiAside
    </Box>
  );
}

export default MuiAside;
