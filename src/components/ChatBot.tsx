import React, { useState } from 'react';
import { MessageCircle, X, Send, User } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { type: 'bot', content: 'Bonjour ! Je suis l\'assistant virtuel d\'Orion Solutions. Comment puis-je vous aider ?' }
  ]);
  const [inputMessage, setInputMessage] = useState('');

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    // Add user message
    setMessages(prev => [...prev, { type: 'user', content: inputMessage }]);

    // Simulate bot response
    setTimeout(() => {
      setMessages(prev => [...prev, {
        type: 'bot',
        content: 'Je transmets votre message à notre équipe. Un expert vous contactera dans les plus brefs délais.'
      }]);
    }, 1000);

    setInputMessage('');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-16 right-0 w-[380px] h-[600px] rounded-lg shadow-lg border border-gray-800 bg-dark-300 overflow-hidden"
          >
            {/* Chat Header */}
            <div className="bg-dark-200 p-4 border-b border-gray-800">
              <div className="flex items-center">
                <MessageCircle className="w-6 h-6 text-accent-500 mr-3" />
                <div>
                  <h3 className="font-semibold">Assistant Orion</h3>
                  <p className="text-sm text-gray-400">En ligne</p>
                </div>
              </div>
            </div>

            {/* Chat Messages */}
            <div className="h-[calc(100%-128px)] overflow-y-auto p-4 space-y-4">
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-lg ${
                      message.type === 'user'
                        ? 'bg-accent-500 text-black ml-4'
                        : 'bg-dark-200 text-white mr-4'
                    }`}
                  >
                    <div className="flex items-start">
                      {message.type === 'bot' && (
                        <MessageCircle className="w-4 h-4 mr-2 mt-1 flex-shrink-0" />
                      )}
                      {message.type === 'user' && (
                        <User className="w-4 h-4 ml-2 mt-1 flex-shrink-0" />
                      )}
                      <p className="text-sm">{message.content}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Chat Input */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-dark-200 border-t border-gray-800">
              <div className="flex items-center">
                <textarea
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Écrivez votre message..."
                  className="flex-1 bg-dark-300 border border-gray-700 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-accent-500 resize-none"
                  rows={1}
                />
                <button
                  onClick={handleSendMessage}
                  className="ml-2 p-2 rounded-full bg-accent-500 text-black hover:bg-accent-400 transition-colors"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 flex items-center justify-center shadow-lg focus:outline-none group"
      >
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          {isOpen ? (
            <X className="w-6 h-6 text-white" />
          ) : (
            <MessageCircle className="w-6 h-6 text-white" />
          )}
        </motion.div>
      </motion.button>
    </div>
  );
};

export default ChatBot;