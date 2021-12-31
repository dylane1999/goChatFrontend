import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import { deepOrange } from "@material-ui/core/colors";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    messageRow: {
      display: "flex",
    },
    messageRowRight: {
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "flex-start",
    },
    leftMessage: {
      position: "relative",
      marginLeft: "20px",
      marginBottom: "10px",
      padding: "10px",
      backgroundColor: "#C4C4C4",
      width: "60%",
      //height: "50px",
      textAlign: "left",
      font: "400 .9em 'Open Sans', sans-serif",
      border: "1px solid #C4C4C4",
      borderRadius: "10px",
      "&:after": {
        content: "''",
        position: "absolute",
        width: "0",
        height: "0",
        borderTop: "15px solid #C4C4C4",
        borderLeft: "15px solid transparent",
        borderRight: "15px solid transparent",
        top: "0",
        left: "-15px",
      },
      "&:before": {
        content: "''",
        position: "absolute",
        width: "0",
        height: "0",
        borderTop: "17px solid #C4C4C4",
        borderLeft: "16px solid transparent",
        borderRight: "16px solid transparent",
        top: "-1px",
        left: "-17px",
      },
    },
    rightMessage: {
      position: "relative",
      marginRight: "20px",
      marginBottom: "10px",
      padding: "10px",
      backgroundColor: "#02AEBF",
      //height: "50px",
      textAlign: "left",
      font: "400 .9em 'Open Sans', sans-serif",
      border: "1px solid #02AEBF",
      borderRadius: "10px",
      "&:after": {
        content: "''",
        position: "absolute",
        width: "0",
        height: "0",
        borderTop: "15px solid #02AEBF",
        borderLeft: "15px solid transparent",
        borderRight: "15px solid transparent",
        top: "0",
        right: "-15px",
      },
      "&:before": {
        content: "''",
        position: "absolute",
        width: "0",
        height: "0",
        borderTop: "17px solid #02AEBF",
        borderLeft: "16px solid transparent",
        borderRight: "16px solid transparent",
        top: "-1px",
        right: "-17px",
      },
    },

    messageContent: {
      padding: 0,
      margin: 0,
    },
    messageTimeStampRight: {
      position: "absolute",
      fontSize: ".85em",
      marginTop: "10px",
      bottom: "-3px",
      right: "5px",
    },

    orangeAvatar: {
      color: theme.palette.getContrastText(deepOrange[500]),
      backgroundColor: deepOrange[500],
      width: theme.spacing(4),
      height: theme.spacing(4),
    },
    avatarNothing: {
      color: "transparent",
      backgroundColor: "transparent",
      width: theme.spacing(4),
      height: theme.spacing(4),
    },
    displayName: {
      marginLeft: "20px",
    },
  })
);

interface IMessageLeftProps {
  message: string;
  username: string;
}

export const MessageLeft = (props: IMessageLeftProps) => {
  const message = props.message ? props.message : "no message";
  const photoURL = "dummy.js";
  const displayName = props.username ? props.username : "NoName";
  const classes = useStyles();
  return (
    <>
      <div className={classes.messageRow}>
        <Avatar
          alt={displayName}
          className={classes.orangeAvatar}
          src={photoURL}
        ></Avatar>
        <div>
          <div className={classes.displayName}>{displayName}</div>
          <div className={classes.leftMessage}>
            <div>
              <p className={classes.messageContent}>{message}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

interface IMessageRightProps {
  message: string;
  username: string;
}

export const MessageRight = (props: IMessageRightProps) => {
  const classes = useStyles();
  const displayName = props.username ? props.username : "NoName";
  const photoURL = "dummy.js";
  const message = props.message ? props.message : "no message";
  return (
    <div className={classes.messageRowRight}>
      <div>
          <div className={classes.displayName}>{displayName}</div>
          <div className={classes.rightMessage}>
            <div>
              <p className={classes.messageContent}>{message}</p>
            </div>
          </div>
        </div>
      <Avatar
        alt={displayName}
        className={classes.orangeAvatar}
        src={photoURL}
      ></Avatar>
    </div>
  );
};
