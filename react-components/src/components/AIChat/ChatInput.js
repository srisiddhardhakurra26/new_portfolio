import React, { useState } from 'react';
import './ChatInput.css';

const ChatInput = ({ onSend, disabled }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() && !disabled) {
      onSend(input.trim());
      setInput('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <form className="chat-input-container" onSubmit={handleSubmit}>
      <input
        type="text"
        className="chat-input"
        placeholder="Ask me anything..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={handleKeyPress}
        disabled={disabled}
      />
      <button 
        type="submit" 
        className="chat-send-btn"
        disabled={!input.trim() || disabled}
      >
        <svg 
          width="20" 
          height="20" 
          viewBox="0 0 24 24" 
          fill="currentColor"
        >
          <path d="M12 2L12 20M12 2L6 8M12 2L18 8"/>
        </svg>
      </button>
    </form>
  );
};

export default ChatInput;
