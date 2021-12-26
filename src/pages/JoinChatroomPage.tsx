import React from "react";
import styled from "styled-components";
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
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: #4a4a4a;
`;

const JoinChatroomPage = () =>  {
    return (
      <>
        <Header />
        <Root>
            dfd
        </Root>
      </>
    );
  }

export default JoinChatroomPage;
