import React, {useEffect, useState} from 'react'
import './chatBar.css'
import { Avatar, IconButton } from "@mui/material";
import {
  AttachFile,
  InsertEmoticon,
  Mic,
  MoreVert,
  SearchOutlined
} from "@mui/icons-material";
import Picker from "emoji-picker-react"
import Draggable from "react-draggable"
//import axios from "axios";


const clickedMenu = () => {
  console.log("clicked menu")
}

 const ChatBar = ({socket, username, chat, isOnline }) => {

  const [anchorPoint, setAnchorPoint] = useState({ x: 0, y: 0 });
  const [show, setShow] = useState(false);
  const [input, setInput] =  useState("");
  const [inputs, setInputs] = useState([]);
  const [showPicker, setShowPicker] = useState(false);
  const [onlineStatus, setOnlineStatus] = useState("offline");


  const sendMessageFetch = async () => {
    if (input !== "") {
      const messageData = {
        chat: "ourchats",
        author: username,
        message: input,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      };
    const data = {
      username: username,
      chat: "ourchats",
      body: input,
    }
    const settings = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }

    try{
      await socket.emit("send_message", messageData);
      fetch("http://localhost:8000/api/chats/addMsg", settings).then((res) => res.text())
      .then(msg => console.log(msg));
      setInput("");
    } catch (err) {
      console.log(err)
    }
  }
}

/*
  const sendMessage = async() => {
    if (input !== "") {
      const messageData = {
        chat: chat,
        author: username,
        message: input,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      };

      const data = {
        username: username,
        chat: chat,
        body: input,
      }
    
      axios.post("http://localhost:8000/api/chats/verifyChat", data).then(async response => {
        console.log(response.data);
        if(response.data === "passed") {
          await socket.emit("send_message", messageData);
          axios.post("http://localhost:8000/api/chats/addMsg", data)
        } else {

        }
      })
      setInput("");
    }
  }
  */

const onEmojiClick = (event, emojiObj) => {
  setInput(prevInput => prevInput + emojiObj.emoji);
  setShowPicker(false);
}
    useEffect(() => {
      socket.on("receive_message", (data) => {
        setInputs((list) => [...list, data]);
      });
    }, [socket]);



 return (
    <div className = "chat">
    <div className = "chat_header">
    <Avatar src = "https://avatars.dicebear.com/api/micah/frend.svg" />
    
    <div className = "chat_headerInfo">
        <h3>{chat}</h3>
        <p>{isOnline}</p>
    </div>


    <div className ="chat_headerRight">
    <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
    </div>
    </div>

    <div className = "chat_body">
    {
        inputs.map((msg) => {
          console.log(msg);
           return (
            <div 
            className = {username === msg.author? "message":"message_other"}
            >
             <span className = "chat_name">{msg.author}</span>
    {msg.message}
    <span className = "chat_timeStamp">
        {msg.time}
    </span>
            </div>
           )
        })
    }
    
    </div>

    <div className = "chat_footer">
    <Draggable>
    <div className = "emoji_picker">
     <InsertEmoticon fontSize = "large" onClick = {() => setShowPicker(val => !val)} />
     {showPicker && <Picker onEmojiClick={ onEmojiClick} /> }
     </div>
     </Draggable>
 
    <input 
    type = "text"
    placeholder = "Type a message" 
    value = {input}
     
    onChange={(event) => {
            setInput(event.target.value);
          }}
      onKeyPress = { (event) => {
      event.key === 'Enter' && sendMessageFetch();
    }}
    /> 
   
     <Mic />
    </div>
    <div className= "contextMenu">
      {show ? (
        <ul
          className="menu"
          style={{
            top: anchorPoint.y,
            left: anchorPoint.x
          }}
          >
          <li onClick = {clickedMenu}>Share to..</li>
          <li>Cut</li>
          <li>Copy</li>
          <li>Paste</li>
          <hr className="divider" />
          <li>Refresh</li>
          <li>Exit</li>
        </ul>
        ) : (
        <> </>)}</div>
    </div>
  )
}

export default ChatBar;
