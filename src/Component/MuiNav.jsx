import { Mail, Pets } from "@mui/icons-material";

import NotificationsIcon from "@mui/icons-material/Notifications";
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  Menu,
  MenuItem,
  styled,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";

import React, { useState } from "react";

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
let IconContainer = styled(Box)(({ theme }) => {
  return {
    display: "none",
    gap: "10px",
    alignItems: "center",
    [theme.breakpoints.up("sm")]: {
      display: "flex",
    },
  };
});
let UserBox = styled(Box)(({ theme }) => {
  return {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  };
});

function MuiNav() {
  let [open, setOpen] = useState(false);
  return (
    <AppBar position="sticky">
      <CustomToolBar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          UtsavBlog
        </Typography>
        <Pets sx={{ display: { xs: "block", sm: "none" } }} />
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
            onClick={(e) => setOpen(true)}
            sx={{ width: 30, height: 30 }}
          />
        </IconContainer>
        <UserBox onClick={(e) => setOpen(true)}>
          <Typography variant="h6">Utsav</Typography>
          <Avatar
            alt="Remy Sharp"
            src="https://media.licdn.com/dms/image/v2/D5603AQEwvjm5kRAeGg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1714505856986?e=1735171200&v=beta&t=8dN3zP5RAL9hZCw1cT8q6dlFTZUY_w6bzqKIYxcUpv8"
          />
        </UserBox>
        <Menu
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"
          open={open}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          onClose={() => setOpen(false)}
        >
          <MenuItem>Profile</MenuItem>
          <MenuItem>My account</MenuItem>
          <MenuItem>Logout</MenuItem>
        </Menu>
      </CustomToolBar>
    </AppBar>
  );
}

export default MuiNav;
