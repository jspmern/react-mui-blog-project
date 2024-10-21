import { Mail } from "@mui/icons-material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  styled,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";

import React from "react";

let CustomToolBar = styled(Toolbar)(({ theme }) => {
  return {
    display: "flex",
    justifyContent: "space-between",
  };
});
let SearchContainer = styled("div")(({ theme }) => {
  return {
    backgroundColor: "white",
    width: "40%",
    borderRadius: theme.shape.borderRadius,
  };
});
let IconContainer = styled(Box)(({ them }) => {
  return {
    display: "flex",
    gap: "10px",
    alignItems: "center",
  };
});
function MuiNav() {
  return (
    <AppBar position="sticky">
      <CustomToolBar>
        <Typography variant="h6">UtsavBlog</Typography>
        <SearchContainer>
          <TextField
            id="outlined-basic"
            label="Search..."
            variant="outlined"
            fullWidth
          />
        </SearchContainer>
        <IconContainer>
          <Badge badgeContent={4} color="error">
            <Mail />
          </Badge>
          <Badge badgeContent={4} color="error">
            <NotificationsIcon />
          </Badge>
          <Avatar
            alt="Remy Sharp"
            src="https://media.licdn.com/dms/image/v2/D5603AQEwvjm5kRAeGg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1714505856986?e=1735171200&v=beta&t=8dN3zP5RAL9hZCw1cT8q6dlFTZUY_w6bzqKIYxcUpv8"
          />
        </IconContainer>
      </CustomToolBar>
    </AppBar>
  );
}

export default MuiNav;
