import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getOpenChatrooms } from "../api/getOpenChatrooms";
import ChatroomJoinBox from "../components/ChatroomJoinBox";
import { Header } from "../components/Header";

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
  const [openChatrooms, setOpenChatrooms] = useState<Array<string>>();

  useEffect(() => {
    (async () => {
      const chatrooms = await getOpenChatrooms();
      setOpenChatrooms(chatrooms);
    })();
  }, []);

  return (
    <>
      <Root>
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
