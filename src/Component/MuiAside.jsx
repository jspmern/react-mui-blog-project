import {
  Add,
  DataUsageRounded,
  Group,
  Home,
  Inbox,
  Male,
  Pages,
  PagesSharp,
  Settings,
  Shop,
  SupervisedUserCircleOutlined,
} from "@mui/icons-material";
import ModeNightIcon from "@mui/icons-material/ModeNight";
import {
  Box,
  Fab,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
  Tooltip,
} from "@mui/material";
import React from "react";

function MuiAside({ mode, setMode }) {
  return (
    <Box flex={1} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box sx={{ position: "fixed" }}>
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary="Homepage" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <PagesSharp />
              </ListItemIcon>
              <ListItemText primary="Pages" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Group />
              </ListItemIcon>
              <ListItemText primary="Groups" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Shop />
              </ListItemIcon>
              <ListItemText primary="Marketplace" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <SupervisedUserCircleOutlined />
              </ListItemIcon>
              <ListItemText primary="Friends" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Settings />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <DataUsageRounded />
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ModeNightIcon />
              </ListItemIcon>
              <Switch
                onChange={(e) => {
                  setMode(e.target.checked);
                }}
                checked={mode}
              />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
}

export default MuiAside;
