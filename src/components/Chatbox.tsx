import React, { useEffect, useState } from "react";
import { IChatMessage } from "../types/chatMessage";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";
import { MessageLeft, MessageRight } from "./ChatMessage";
import TextInput from "./TextInput";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      width: "80vw",
      height: "80vh",
      maxWidth: "500px",
      maxHeight: "700px",
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      position: "relative",
    },
    paper2: {
      width: "80vw",
      maxWidth: "500px",
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      position: "relative",
      backgroundColor: "#4A4A4A",
    },
    container: {
      width: "100vw",
      height: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#4A4A4A",
    },
    messagesBody: {
      width: "calc( 100% - 20px )",
      margin: 10,
      overflowY: "scroll",
      height: "calc( 100% - 80px )",
      backgroundColor: "#707070",
    },
  })
);

interface IChatboxProps {
  wsConnection: WebSocket;
  currentUser: string;
  chatroomId: string;
  handleSendMessageThroughSocket(
    messageToSend: IChatMessage,
    wsConnection: WebSocket,
    setCurrentMessage: React.Dispatch<string>
  ): void;
}

const Chatbox = (props: IChatboxProps) => {
  const classes = useStyles();

  const [chatMessages, setChatMessages] = useState<Array<IChatMessage>>(
    new Array<IChatMessage>()
  );

  useEffect(() => {
    // set the event listener
    props.wsConnection.onmessage = (message) => {
      message.preventDefault();
      const newMessage: IChatMessage = JSON.parse(message.data);
      // add the message to list of messages
      setChatMessages((chatMessages) => [...chatMessages, newMessage]);
    };
  }, []);

  return (
    <>
      <Paper className={classes.paper}>
        <Paper id="style-1" className={classes.messagesBody}>
          {chatMessages.map((message: IChatMessage) => {
            return (
              <>
                {message.username === props.currentUser ? (
                  <MessageRight
                    message={message.text}
                    username={message.username}
                  />
                ) : (
                  <MessageLeft
                    message={message.text}
                    username={message.username}
                  />
                )}
              </>
            );
          })}
        </Paper>
        <TextInput
          handleSendMessageThroughSocket={props.handleSendMessageThroughSocket}
          user={props.currentUser}
          chatroomId={props.chatroomId}
          wsConnection={props.wsConnection}
        />
      </Paper>
    </>
  );
};

export default Chatbox;
