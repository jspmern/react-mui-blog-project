import { Add } from "@mui/icons-material";
import { Box, Fab, Modal, styled, Tooltip, Typography } from "@mui/material";
import React, { useState } from "react";

function AddComp() {
  let [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  let ModelBox = styled(Box)(({ theme }) => {
    return {
      background: "white",
      height: "400px",
      width: "700px",
      borderRadius: theme.shape.borderRadius,
    };
  });
  return (
    <>
      <Tooltip
        title="Add Message"
        sx={{
          position: "fixed",
          bottom: 20,
          left: { xs: "calc(50% - 25px)", md: 30 },
        }}
      >
        <Fab color="primary" aria-label="add" onClick={handleOpen}>
          <Add />
        </Fab>
      </Tooltip>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            height: "100vh",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          //   bgcolor={"background.default"}
          //   color={}
        >
          <ModelBox>
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
            ></Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
          </ModelBox>
        </Box>
      </Modal>
    </>
  );
}

export default AddComp;
