import { Box } from "@mui/system";
import react, { useState } from "react";
import styled from "styled-components";
import SendIcon from "@mui/icons-material/Send";
import QuizIcon from "@mui/icons-material/Quiz";
import CancelIcon from "@mui/icons-material/Cancel";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import { IconButton } from "@mui/material";
import BouncingDotsLoader from "./BouncingDotsLoader";

export const StyledChatBox = styled(Box)(({ theme, props }) => {
  return {
    width: "375px",
    height: "450px",
    backgroundColor: "#EFF1FE",
    borderRadius: "14px",
    position: "relative",
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    ".header": {
      padding: "15px 12px",
      backgroundColor: "#47507A",
      borderRadius: "16px 16px 0 0",
      fontSize: "14px",
      fontWeight: "600",
      color: "#f2f2edc4",
      letterSpacing: "1px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      ".MuiSvgIcon-root": {
        width: "17px",
        height: "17px",
        marginRight: "6px",
      },
      ".action-container": {
        ".MuiSvgIcon-root": {
          width: "18px",
          height: "18px",
          marginRight: "6px",
          cursor: "pointer",
        },
      },
    },
    ".body-container": {
      overflowY: "auto",
      height: "calc(450px - 110px)",
      padding: "10px 0",
      ".bot-container": {
        color: "#47507A",
        marginLeft: "10px",
        columnGap: "5px",
      },
      ".bot,.question": {
        fontSize: "11px",
        backgroundColor: "#fff",
        width: "fit-content",
        // minWidth: "130px",
        padding: "10px 13px",
        // borderRadius: "0  20px 20px 0",
        borderRadius: "20px",
        color: "#3C315B",
        maxWidth: "250px",
        wordWrap: "break-word",
        marginTop: "15px",
        fontWeight: "600",
        // marginLeft: "10px",
      },
      ".question": {
        // borderRadius: "20px  0 0 20px",
        marginLeft: "0",
        marginRight: "20px",
        backgroundColor: "#a7b0dc85",
        minWidth: "100px",
        textAlign: "center",
      },
    },
    ".footer": {
      position: "absolute",
      bottom: "0",
      width: "100%",
      ".styled-input": {
        width: "100%",
        // borderRadius: "0 0 16px 16px",
        border: "none",
        padding: "18px",
        paddingRight: "40px",
        borderTop: "1px solid #ded3bd70",
        "&::placeholder": {
          color: "#8A8482",
          letterSpacing: "1px",
        },
      },
      ".send-btn": {
        position: "absolute",
        bottom: "9px",
        right: "10px",
        ".MuiSvgIcon-root": {
          color: "#47507A",
        },
      },
    },
  };
});

const ChatBox = ({ setShowChatBox }) => {
  const [chats, setChats] = useState([
    {
      from: "bot",
      value: "How are you?",
      isLoading: false,
    },
    {
      from: "user",
      value: "I am fine",
      isLoading: false,
    },
  ]);

  const [question, setQuestion] = useState("");

  const handleSend = () => {
    setQuestion("");
    let copyChats = [...chats];
    copyChats.push(
      { from: "bot", value: question, isLoading: false },
      { from: "user", value: "I am Fine", isLoading: true }
    );
    setChats(copyChats);
    setTimeout(() => {
      copyChats[copyChats.length - 1] = {
        from: "user",
        value: "I am Fine",
        isLoading: false,
      };
      setChats([...copyChats]);
    }, 3000);
  };

  return (
    <StyledChatBox>
      <div className="header">
        <div style={{ display: "flex", alignItems: "center" }}>
          <QuizIcon />
          Chat Box
        </div>
        <div className="action-container" onClick={() => setShowChatBox(false)}>
          <CancelIcon />
        </div>
      </div>
      <div className="body-container">
        {chats.map((item, index) => {
          if (item.from === "bot") {
            return (
              <div
                className="bot-container"
                style={{ display: "flex", alignItems: "flex-end" }}
                key={index}
              >
                <SmartToyIcon />
                <div className="bot">{item.value}</div>{" "}
              </div>
            );
          } else {
            return (
              <div
                style={{ display: "flex", justifyContent: "flex-end" }}
                key={index}
              >
                <div className="question">
                  {item.isLoading ? <BouncingDotsLoader /> : item.value}
                </div>
              </div>
            );
          }
        })}
      </div>
      <div className="footer">
        <input
          className="styled-input"
          placeholder="Ask Me Anything?"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        ></input>
        <div className="send-btn">
          <IconButton onClick={handleSend}>
            <SendIcon />
          </IconButton>
        </div>
      </div>
    </StyledChatBox>
  );
};

export default ChatBox;
