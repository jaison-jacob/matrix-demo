import React, { useEffect, useState } from "react";
import ChatBox from "../components/shared/ChatBox";
import styled from "styled-components";
import { IconButton } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { Box, fontSize } from "@mui/system";
import { postApiServices } from "../api/api";
import { apiRoutes } from "../api/apiPath";
import { useMsal } from "@azure/msal-react";
import Markdown from "react-markdown";
import BouncingDotsLoader from "../components/shared/BouncingDotsLoader";
import SmartToyIcon from "@mui/icons-material/SmartToy";

export const StyledChatBoxWeb = styled(Box)(({ theme, props }) => {
  return {
    width: "calc(100% + 40px)",
    marginLeft: "-20px",
    marginTop: "-20px",
    height: "calc(100vh - 67px)",
    backgroundColor: "#F1F1EF",
    // borderRadius: "14px",

    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    // boxShadow:
    //   "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    // padding:"0 50px",
    position: "relative",
    ".body-wrapper": {
      width: "100%",
      overflowY: "auto",
      height: "calc(100vh - 130px)",
      display: "flex",
      justifyContent: "center",
      marginBottom: "8px",
      //   padding:"calc(100% - 50px)",
    },
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
      width: "calc(80% + 20px)",

      //   padding: "10px calc(100% - 1000px)",

      ".bot-container": {
        color: "#47507A",
        marginLeft: "10px",
        columnGap: "5px",
        marginBottom: "30px",
      },
      ".bot,.question": {
        fontSize: "8px",
        backgroundColor: "#ffff",
        width: "fit-content",
        // minWidth: "130px",
        padding: "10px 13px",
        // borderRadius: "0  20px 20px 0",
        borderRadius: "10px",
        color: "#3C315B",
        maxWidth: "60%",
        wordWrap: "break-word",
        marginTop: "15px",
        fontWeight: "600",
        // border: "1px solid #2080E8",
        boxShadow:
          "0 1px 10px 0 rgba(0, 0, 0, 0.1), 0 0px 0px 0 rgba(0, 0, 0, 0.19)",
        p: {
          fontSize: "11px",
          lineHeight: "1.8",
        },
        // marginLeft: "10px",
      },
      ".question": {
        // borderRadius: "20px  0 0 20px",
        marginLeft: "0",
        marginRight: "20px",
        backgroundColor: "#D3E7FE",
        minWidth: "100px",
        textAlign: "center",
        color: "#000",
      },
    },
    ".footer": {
      //   position: "absolute",
      //   bottom: "0",
      width: "80%",
      backgroundColor: "#fff",
      padding: "14px 18px",
      paddingTop: "0",
      borderTop: "1px solid #ded3bd70",
      paddingRight: "0px",
      paddingBottom: "0",
      display: "flex",
      borderRadius: "20PX",
      border: "1px solid #121135",
      alignItems: "center",
      justifyContent: "space-between",
      ".styled-input": {
        width: "95%",
        // borderRadius: "0 0 16px 16px",
        border: "none",
        // padding: "14px 18px",
        paddingRight: "40px",
        // borderTop: "1px solid #ded3bd70",
        resize: "none",
        "&::placeholder": {
          color: "#8A8482",
          letterSpacing: "1px",
        },
      },
      ".send-btn": {
        // position: "absolute",
        // bottom: "9px",
        // right: "10px",
        ".MuiSvgIcon-root": {
          color: "#47507A",
        },
      },
    },
  };
});

const Chat = () => {
  const [question, setQuestion] = useState("");
  const maxTextareaHeight = 80;

  const [chats, setChats] = useState([]);
  const { instance } = useMsal();
  const activeAccount = instance.getActiveAccount();

  const createPayload = (message) => {
    return {
      temperature: "0",
      question: message,
      chatId: uuidv4(),
    };
  };

  const handleSend = () => {
    let copyChats = [...chats];
    let botChat = {
      chatId: uuidv4(),
      from: "bot",
      value: question,
      isLoading: false,
    };
    copyChats.push(botChat);
    let userChat = {
      chatId: uuidv4(),
      from: "user",
      value: "",
      isLoading: true,
    };
    copyChats.push(userChat);
    setChats(copyChats);
    const payload = createPayload(question);
    const params = new URLSearchParams({
      index: "alp-contracts",
      model_id: "openai_pinecone",
    });
    postApiServices(`${apiRoutes.GET_CHAT_ANSWER}${params.toString()}`, payload)
      .then((res) => {
        userChat = {
          chatId: uuidv4(),
          from: "user",
          value: res.data,
          isLoading: false,
        };
        console.log("eerrr ", res.data);
        copyChats[copyChats.length - 1] = { ...userChat };
        setChats([...copyChats]);
        localStorage.setItem("chats", JSON.stringify(copyChats));
      })
      .catch((err) => console.log("weewwuiyeiuf ", err));
  };

  const handleOnchange = (event) => {
    const textarea = event.target;
    textarea.style.height = "inherit";
    const newHeight = Math.min(textarea.scrollHeight, maxTextareaHeight);
    textarea.style.height = `${newHeight}px`;
    setQuestion(textarea.value);
  };

  useEffect(() => {
    const allChats = JSON.parse(localStorage.getItem("chats"));
    if (allChats) {
      setChats([...allChats]);
    } else {
      let defaultMsg = {
        chatId: uuidv4(),
        from: "bot",
        value:
          "Hi, I am Contract AI!, your personal assistant. I can help you with your queries. Ask me anything!",
        isLoading: false,
      };
      let copyChats = [...chats];
      copyChats.push(defaultMsg);
      localStorage.setItem("chats", JSON.stringify(copyChats));
    }
  }, []);

  return (
    <div>
      {/* <ChatBox /> */}
      <StyledChatBoxWeb>
        <div className="body-wrapper">
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
                    <div className="bot">
                      <Markdown>{item.value}</Markdown>
                    </div>{" "}
                  </div>
                );
              } else {
                return (
                  <div
                    style={{ display: "flex", justifyContent: "flex-end" }}
                    key={index}
                  >
                    <div className="question">
                      {item.isLoading ? (
                        <BouncingDotsLoader />
                      ) : (
                        <Markdown>{item.value}</Markdown>
                      )}
                    </div>
                  </div>
                );
              }
            })}
          </div>
        </div>
        <div className="footer" style={{ padding: "12px 16px" }}>
          <textarea
            className="styled-input"
            placeholder="Ask Me Anything?"
            rows={1}
            value={question}
            onChange={handleOnchange}
            style={{
              //   minHeight: "30px",
              maxHeight: `${maxTextareaHeight}px`,
              resize: "none",
              overflowY: "auto",
              transition: "height 0.2s",
            }}
          ></textarea>
          <div className="send-btn">
            <IconButton style={{ padding: "0" }} onClick={handleSend}>
              <SendIcon />
            </IconButton>
          </div>
        </div>
      </StyledChatBoxWeb>
    </div>
  );
};

export default Chat;
