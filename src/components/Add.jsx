import styled from "@emotion/styled";
import {
  Add,
  DateRange,
  EmojiEmotions,
  Image,
  PersonAdd,
  VideoCameraBack,
} from "@mui/icons-material";
import {
  Tooltip,
  Fab,
  Modal,
  Typography,
  Box,
  Avatar,
  TextField,
  ButtonGroup,
  Button,
} from "@mui/material";
import { Stack } from "@mui/system";
import { useState } from "react";

const StyledModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const UserBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  marginBottom: "20px",
});

const AddButton = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Tooltip
        onClick={() => setOpen(true)}
        title="Delete"
        sx={{
          position: "fixed",
          bottom: 20,
          // left:{
          //   xs: 'calc(50% -20px)',md:30
          // }
          right: 15,
        }}
      >
        <Fab color="primary" aria-label="add">
          <Add />
        </Fab>
      </Tooltip>
      <StyledModal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box width={400} height={280} 
          // bgcolor={"white"} 
          bgcolor={'background.default'} color={'text.primary'}
          p={3} borderRadius={5}>
          <Typography variant="h6" color="gray" textAlign={"center"}>
            Create Post
          </Typography>
          <UserBox>
            <Avatar
              alt="Remy Sharp"
              src="https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=600"
            />
            <Typography fontWeight={500} variant="span">
              Jane Doe
            </Typography>
          </UserBox>
          <TextField
            sx={{ width: "100%" }}
            id="standard-multiline-static"
            multiline
            rows={3}
            placeholder="What's on your mind?"
            variant="standard"
          />
          <Stack direction={"row"} gap={1} mt={2} mb={3}>
            <EmojiEmotions color="primary" />
            <Image color="secondary" />
            <VideoCameraBack color="success" />
            <PersonAdd color="error" />
          </Stack>
          <ButtonGroup
            fullWidth
            variant="contained"
            aria-label="outlined primary button group"
          >
            <Button>Post</Button>
            <Button sx={{width: '100px'}}><DateRange/></Button>
          </ButtonGroup>
        </Box>
      </StyledModal>
    </>
  );
};

export default AddButton;
