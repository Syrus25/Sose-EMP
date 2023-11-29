import React, { useState, useEffect } from 'react';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState('');

  useEffect(() => {
    // Automatically scroll to the bottom when new messages are added
    const chat = document.getElementById('chat');
    chat.scrollTop = chat.scrollHeight;
  }, [messages]);

  const handleSendMessage = async () => {
    if (userInput.trim() !== '') {
      setMessages([...messages, { type: 'user', content: userInput }]);
      
      // Simulate an asynchronous response (replace with actual API call)
      try {
        const botResponse = await simulateBotResponse(userInput);
        setMessages([...messages, { type: 'bot', content: botResponse }]);
      } catch (error) {
        // Handle error
        console.error('Error processing message:', error.message);
      }

      setUserInput(''); // Clear the input field
    }
  };

  const simulateBotResponse = async (userMessage) => {
    // Simulate an asynchronous API call or processing logic here
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(`Thanks for your message: "${userMessage}"`);
      }, 1000);
    });
  };

  return (
    <div className="chatbox">
      <div className="chat" id="chat">
        {messages.map((message, index) => (
          <div key={index} className={message.type}>
            {message.type === 'user' ? 'You: ' : 'Bot: '}
            {message.content}
          </div>
        ))}
      </div>
      <input
        type="text"
        id="userInput"
        placeholder="Type your message..."
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />
      <button id="sendButton" onClick={handleSendMessage}>
        Send
      </button>
    </div>
  );
};

export default Chatbot;
