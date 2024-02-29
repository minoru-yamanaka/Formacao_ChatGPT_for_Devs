import React from "react";
import './ChatMessage.css'
import Avatar from "../../assets/avatar";


// user (user | chatgpt)
// message - aonde vai estar o prompt
export const ChatMessage = ({message}) =>{
    <div className={`chat-message ${message.user === 'gpt'} && "chatgpt"`}
    >

    <div className="chat-message-center">   

        <div className={
            `avatar
            ${message.user === "gpt" &&  "chatgpt"}` }
        >
            {message.user === 'gpt' && (<Avatar/>)}
            
        </div> // fim de div do avatar 

        <div className="message">
            {message.message}
        </div> // fim de div message

    </div> // fim da div chat-message-center
        
    </div> // fim de div chat-message
}