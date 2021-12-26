import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

interface IChatroomJoinBoxProps {
  chatroomId: string;
}

const Root = styled.div`
  /* Rectangle 2 */

  width: 224px;
  height: 47px;

  background: #c4c4c4;
  border-radius: 5px;
  padding: 8px;
  border: #7a7979 1px solid;
`;

const StyledLink = styled(Link)`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 1rem;

  color: black;
  text-decoration: none;
`;

const ChatroomJoinBox = (props: IChatroomJoinBoxProps) => {
  return (
    <>
      <StyledLink to={`/chatroom/${props.chatroomId}`}>
        <Root>chatroom Id: {props.chatroomId}</Root>
      </StyledLink>
    </>
  );
};

export default ChatroomJoinBox;
