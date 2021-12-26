import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import TextInput from "../components/TextInput";
import { IChatMessage } from "../types/chatMessage";

const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100vw;
  min-height: 100vh;
  background-color: #4a4a4a;
`;

const handleSendMessageThroughSocket = (messageToSend: IChatMessage, wsConnection:WebSocket, setCurrentMessage: React.Dispatch<string>) => {
    wsConnection.send(
        JSON.stringify({
            username: messageToSend.username,
            text: messageToSend.text,
            chatroomId: messageToSend.chatroomId
        })
    );
    setCurrentMessage("")
};



const ChatroomPage = () => {
  // chat message
  const location = useLocation();
  console.log(location.pathname);
  // get socket 
  const chatroomId = location.pathname.split("chatroom/")[1];
  const [wsConnection, setWsConnection] = useState<WebSocket>(
    new WebSocket(
      `ws://localhost:5000/websocket?chatroomId=${chatroomId}`
    )
  );
  // move chat messages our of the state somehow
  const [chatMessages, setChatMessages] = useState<Array<IChatMessage>>(
    new Array<IChatMessage>()
  );

  console.log(wsConnection);
  useEffect(() => {
    // set the event listener
    wsConnection.onmessage = (message) => {
      message.preventDefault()
      const newMessage: IChatMessage = JSON.parse(message.data);
      // add the message to list of messages
      setChatMessages((chatMessages) => [...chatMessages, newMessage]);
    };
    // kill socket on exit
    return () => {
      wsConnection.close();
    };
  }, []);

  return (
    <Root>
      <div>
        dsfsdfsdf
        <span>Path : {location.pathname.split("chatroom/")[1]}</span>
        {chatMessages.map((message: IChatMessage) => {
          return (
            <>
              MESSAGE: <div>{message.text}</div>{" "}
            </>
          );
        })}
        {/* /interface to allow for typing in messages */}
      </div>
      <TextInput
        handleSendMessageThroughSocket={handleSendMessageThroughSocket}
        user={"dylane1999"}
        chatroomId={chatroomId}
        wsConnection={wsConnection}
      />
    </Root>
  );
};

export default ChatroomPage;
