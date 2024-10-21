import {
  Avatar,
  AvatarGroup,
  Box,
  Divider,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";

function MuiRight() {
  return (
    <Box flex={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position={"fixed"} width={350}>
        <Typography variant="subtitle1" sx={{ color: "grey", mt: 2, mb: 1 }}>
          Online Friends
        </Typography>
        <AvatarGroup total={24}>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          <Avatar
            alt="Travis Howard"
            src="https://media.licdn.com/dms/image/v2/D5603AQEwvjm5kRAeGg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1714505856986?e=1735171200&v=beta&t=8dN3zP5RAL9hZCw1cT8q6dlFTZUY_w6bzqKIYxcUpv8"
          />
          <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
          <Avatar
            alt="Travis Howard"
            src="https://media.licdn.com/dms/image/v2/D5603AQEwvjm5kRAeGg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1714505856986?e=1735171200&v=beta&t=8dN3zP5RAL9hZCw1cT8q6dlFTZUY_w6bzqKIYxcUpv8"
          />
        </AvatarGroup>
        <Typography variant="subtitle1" sx={{ color: "grey", mt: 2, mb: 1 }}>
          Latest Photos
        </Typography>
        <ImageList cols={3} rowHeight={100} gap={5}>
          <ImageListItem>
            <img
              src={`https://media.istockphoto.com/id/157180797/photo/car-accident-crash.jpg?s=2048x2048&w=is&k=20&c=ImoHcy-O2bHxfB53BFp9tdT38EbUQXuZPDAjHPydI2w=`}
              alt={`${Math.random()}+abc`}
              loading="lazy"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src={`https://media.istockphoto.com/id/157180797/photo/car-accident-crash.jpg?s=2048x2048&w=is&k=20&c=ImoHcy-O2bHxfB53BFp9tdT38EbUQXuZPDAjHPydI2w=`}
              alt={`${Math.random()}+abc`}
              loading="lazy"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src={`https://media.istockphoto.com/id/157180797/photo/car-accident-crash.jpg?s=2048x2048&w=is&k=20&c=ImoHcy-O2bHxfB53BFp9tdT38EbUQXuZPDAjHPydI2w=`}
              alt={`${Math.random()}+abc`}
              loading="lazy"
            />
          </ImageListItem>
        </ImageList>
        <Typography variant="subtitle1" sx={{ color: "grey", mt: 2, mb: 1 }}>
          Latest Conversations
        </Typography>
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Remy Sharp"
                src="https://media.licdn.com/dms/image/v2/D5603AQEwvjm5kRAeGg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1714505856986?e=1735171200&v=beta&t=8dN3zP5RAL9hZCw1cT8q6dlFTZUY_w6bzqKIYxcUpv8"
              />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    sx={{ color: "text.primary", display: "inline" }}
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Summer BBQ"
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    sx={{ color: "text.primary", display: "inline" }}
                  >
                    to Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Cindy Baker"
                src="https://media.licdn.com/dms/image/v2/D5603AQEwvjm5kRAeGg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1714505856986?e=1735171200&v=beta&t=8dN3zP5RAL9hZCw1cT8q6dlFTZUY_w6bzqKIYxcUpv8"
              />
            </ListItemAvatar>
            <ListItemText
              primary="Oui Oui"
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    sx={{ color: "text.primary", display: "inline" }}
                  >
                    Sandra Adams
                  </Typography>
                  {" — Do you have Paris recommendations? Have you ever…"}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
}

export default MuiRight;
