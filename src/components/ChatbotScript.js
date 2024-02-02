import { useEffect } from 'react';

function ChatbaseScript() {
  useEffect(() => {
    // Setting the global configuration for the chatbot
    window.embeddedChatbotConfig = {
      chatbotId: "Eh63RVWsxddDIZteB3QQY",
      domain: "www.chatbase.co"
    };

    // Creating the script element
    const script = document.createElement('script');
    script.src = "https://www.chatbase.co/embed.min.js";
    script.defer = true;
    
    // Append the script to the body
    document.body.appendChild(script);

    // Clean up the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []); // Empty dependency array means this effect runs only once after the initial render

  return null; // This component doesn't render anything itself
}
export default ChatbaseScript;