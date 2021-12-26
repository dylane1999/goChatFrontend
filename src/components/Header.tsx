import React from "react";
import styled from "styled-components";
import GoChatLogo from "../assets/GoChatLogo";

interface Props {}

const Root = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  background-color: #4a4a4a;
  width: 100vw;
`;

const LogoWrapper = styled.div`
  padding: 16px;
  padding-left: 62px;
`;

export const Header = (props: Props) => {
  return (
    <Root>
      <LogoWrapper>
        <GoChatLogo />
      </LogoWrapper>
    </Root>
  );
};
