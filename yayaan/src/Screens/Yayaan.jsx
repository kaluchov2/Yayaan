import React from "react";
import Chatbot from "react-chatbot-kit";

import config from "./Chatbot/chatbotConfig";
import MessageParser from "./Chatbot/MessageParser";
import ActionProvider from "./Chatbot/ActionProvider";
import Header from "../common/header/header"
import './yayaan.css'

function Yayaan() {
  return (
    <div className="Yayaan">
      <Header/>
      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
        placeholderText="Hablemos un rato:)"
      />
    </div>
  );
}

export default Yayaan;