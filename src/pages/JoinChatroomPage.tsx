import {
  Backdrop,
  Box,
  Button,
  CircularProgress,
  Modal,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Chatbox from "../components/Chatbox";
import { Header } from "../components/Header";
import TextInput from "../components/TextInput";
import { IChatMessage } from "../types/chatMessage";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import ChatroomJoinBox from "../components/ChatroomJoinBox";
import { getOpenChatrooms } from "../api/getOpenChatrooms";


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    backdrop: {
      color: "#fff",
      zIndex: 5,
    },
    boxStyle: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: "737px",
      height: "354px",
      backgroundColor: "#C4C4C4",
      border: "2px solid #000",
      boxShadow: "24px",
      borderRadius: "8px",
      p: 4,
    },
    textStyle: {
      color: "white",
    },
  })
);

const TitleText = styled.p`
  /* Available Chatrooms */
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 44.0769px;
  line-height: 52px;

  color: #69d7e2;
`;

const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100vw;
  min-height: 100vh;
  background-color: #4a4a4a;
`;

const AvailableChatroomsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  width: 90%;
  flex-wrap: wrap;
`;

const ChatroomBoxWrapper = styled.div`
  padding: 6px;
`;

const ContentWrapper = styled.div`
  padding-left: 62px;
  width: 100%;
`;

const JoinChatroomPage = () => {
  const classes = useStyles();
  const [openChatrooms, setOpenChatrooms] = useState<Array<string>>();
  const [username, setUsername] = useState("");
  const [usernameChosen, setUsernameChosen] = useState(false);

  useEffect(() => {
    (async () => {
      const chatrooms = await getOpenChatrooms();
      setOpenChatrooms(chatrooms);
    })();
  }, []);

  

  return (
    <>
      <Root>
        <Modal
          open={!usernameChosen}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box className={classes.boxStyle}>
            <Typography
              className={classes.textStyle}
              id="modal-modal-title"
              variant="h6"
              component="h2"
            >
              Please Input your Chatname
            </Typography>
            <TextField
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              id="outlined-basic"
              label="chat name"
              variant="outlined"
            />
            <Button onClick={() => setUsernameChosen(true)}>
              Choose Screename
            </Button>
          </Box>
        </Modal>
        <Header />
        <ContentWrapper>
          <TitleText>Available Chatrooms: </TitleText>
          <AvailableChatroomsWrapper>
            {openChatrooms?.map((chatroomId) => {
              return (
                <ChatroomBoxWrapper>
                  <ChatroomJoinBox chatroomId={chatroomId} />
                </ChatroomBoxWrapper>
              );
            })}
          </AvailableChatroomsWrapper>
        </ContentWrapper>
      </Root>
    </>
  );
};

export default JoinChatroomPage;
