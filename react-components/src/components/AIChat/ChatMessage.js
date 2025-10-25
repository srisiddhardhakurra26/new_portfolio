import React from 'react';
import './ChatMessage.css';

const ChatMessage = ({ message }) => {
  const isUser = message.sender === 'user';
  
  return (
    <div className={`chat-message ${isUser ? 'user-message' : 'ai-message'}`}>
      <div className="message-bubble">
        <p className="message-text">{message.text}</p>
        <span className="message-time">
          {message.timestamp.toLocaleTimeString('en-US', { 
            hour: 'numeric', 
            minute: '2-digit',
            hour12: true 
          })}
        </span>
      </div>
    </div>
  );
};

export default ChatMessage;
