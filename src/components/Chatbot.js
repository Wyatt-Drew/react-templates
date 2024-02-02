import React, { useEffect } from 'react';

function Chatbot() {
  useEffect(() => {
    try {
      const script = document.createElement('script');
      script.text = `
        window.embeddedChatbotConfig = {
          chatbotId: "Eh63RVWsxddDIZteB3QQY",
          domain: "www.chatbase.co"
        };
      `;
      document.head.appendChild(script);

      const chatbotScript = document.createElement('script');
      chatbotScript.src = 'https://www.chatbase.co/embed.min.js';
      chatbotScript.defer = true;
      chatbotScript.chatbotId = 'Eh63RVWsxddDIZteB3QQY';
      chatbotScript.domain = 'www.chatbase.co';
      
      // Add an error event listener to prevent error pop-up
      chatbotScript.onerror = (errorEvent) => {
        console.error('Chatbot script failed to load');
        errorEvent.preventDefault(); // This prevents the error from being logged in the console
      };

      document.head.appendChild(chatbotScript);

      return () => {
        // Clean up the script when the component unmounts
        document.head.removeChild(script);
        document.head.removeChild(chatbotScript);
      };
    } catch (error) {
      console.error('Error loading Chatbot:', error);
    }
  }, []);

  return (
    null
  );
}

export default Chatbot;
