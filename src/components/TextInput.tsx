import {
  Button,
  createStyles,
  makeStyles,
  TextField,
  Theme,
} from "@material-ui/core";
import React, { useState } from "react";
import SendIcon from "@material-ui/icons/Send";
import { IChatMessage } from "../types/chatMessage";

interface ITextInputProps {
  handleSendMessageThroughSocket(
    messageToSend: IChatMessage,
    wsConnection: WebSocket,
    setCurrentMessage: React.Dispatch<string>
  ): void;
  user: string;
  chatroomId: string;
  wsConnection: WebSocket
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrapForm: {
      display: "flex",
      justifyContent: "center",
      width: "95%",
      margin: `${theme.spacing(0)} auto`,
    },
    wrapText: {
      width: "100%",
    },
    button: {
      //margin: theme.spacing(1),
      backgroundColor: "#38b2bd",
    },
  })
);

const TextInput = (props: ITextInputProps) => {
  const [messageValue, setMessage] = useState<string>("");

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    // messageToSend: IChatMessage,
    // wsConnection: WebSocket,
    // setCurrentMessage: React.Dispatch<string>
    e.preventDefault()
    const messageToSend: IChatMessage = {
      username: props.user,
      chatroomId: props.chatroomId,
      text: messageValue
    }
    props.handleSendMessageThroughSocket(messageToSend, props.wsConnection, setMessage)
    console.log("SUBMIT")
  };

  const classes = useStyles();
  return (
    <>
      <form
        className={classes.wrapForm}
        noValidate
        autoComplete="off"
        onSubmit={(e) => handleSubmit(e)}
      >
        <TextField
          id="standard-text"
          label="enter message"
          className={classes.wrapText}
          value={messageValue}
          onChange={(e) => {
            e.preventDefault()
            setMessage(e.target.value)
          }}
        //margin="normal"
        />
        <Button type="submit" variant="contained" color="primary" className={classes.button}>
          <SendIcon />
        </Button>
      </form>
    </>
  );
};

export default TextInput;
