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

const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100vw;
  min-height: 100vh;
  background-color: #4a4a4a;
`;

const TitleText = styled.p`
  /* Available Chatrooms */
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;

  color: #69d7e2;
`;

const TitleTextWrapper = styled.div`
  padding: 6px;
`;

const handleSendMessageThroughSocket = (
  messageToSend: IChatMessage,
  wsConnection: WebSocket,
  setCurrentMessage: React.Dispatch<string>
) => {
  wsConnection.send(
    JSON.stringify({
      username: messageToSend.username,
      text: messageToSend.text,
      chatroomId: messageToSend.chatroomId,
    })
  );
  setCurrentMessage("");
};

interface IChatroomPageProps {
  username: string;
}

const ChatroomPage = () => {
  const location = useLocation()
  // get socket
  const chatroomId = location.pathname.split("chatroom/")[1];
  const chatroomState = location 
  console.log(chatroomState)
  // const chatroomId = location.

  const [wsConnection, setWsConnection] = useState<WebSocket>(
    new WebSocket(`ws://localhost:5000/websocket?chatroomId=${chatroomId}`)
  );

  console.log(wsConnection);
  useEffect(() => {
    // kill socket on exit
    return () => {
      wsConnection.close();
    };
  }, []);

  return (
    <Root>
      <Header />
      <TitleTextWrapper>
        <TitleText>
          ChatrromId : {location.pathname.split("chatroom/")[1]}
        </TitleText>{" "}
      </TitleTextWrapper>
      <Chatbox
        wsConnection={wsConnection}
        chatroomId={chatroomId}
        currentUser={"test"}
        handleSendMessageThroughSocket={handleSendMessageThroughSocket}
      />
    </Root>
  );
};

export default ChatroomPage;
