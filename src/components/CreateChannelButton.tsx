import { Button, styled } from "@material-ui/core";
import { purple } from "@material-ui/core/colors";
import React from "react";

const CreateChannelButton = () => {

  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    "&:hover": {
      backgroundColor: purple[700],
    },
  }));

  return <div></div>;
  
};

export default CreateChannelButton;
