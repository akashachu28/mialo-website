'use client'

import { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

export default function FloatingChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<{ role: 'user' | 'bot'; text: string }[]>([]);

  const handleSend = () => {
    if (!message.trim()) return;

    // Add user message
    setMessages(prev => [...prev, { role: 'user', text: message }]);
    
    // Simulate bot response (replace with actual AI integration)
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        role: 'bot', 
        text: 'Thank you for your message. Our team will get back to you soon!' 
      }]);
    }, 1000);

    setMessage('');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Floating Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open chat"
        className={`fixed bottom-6 right-6 z-50 flex py-3 px-2 space-x-2 items-center justify-center rounded-full border border-line-2 bg-pista text-black shadow-lg backdrop-blur-xl transition-all duration-300 hover:scale-110  hover:bg-pista ${
          isOpen ? 'scale-0 opacity-0' : 'scale-100 opacity-100'
        }`}
        style={{
          boxShadow: '0 8px 32px rgba(108, 147, 255, 0.15)',
          fontFamily: "var(--font-manrope), sans-serif",
        //   lineHeight: 1.1,
          letterSpacing: "-0.045em",
        }}
      >
        <MessageCircle size={24} className="text-ice" />
        <p className='font-medium'>Chat with Us</p>
      </button>

      {/* Chat Popup */}
      <div
        className={`fixed bottom-6 right-6 z-50 flex h-[600px] w-[380px] flex-col rounded-2xl border border-line-2 bg-raise/70 shadow-2xl backdrop-blur-2xl transition-all duration-300 ${
          isOpen ? 'scale-100 opacity-100' : 'scale-75 opacity-0 pointer-events-none'
        }`}
        style={{
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(108, 147, 255, 0.1)',
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-line-2 p-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-ice/10 border border-ice/20">
              <MessageCircle size={20} className="text-ice" />
            </div>
            <div>
              <h3 className="font-display text-base font-medium text-primary">
                Mialo Assistant
              </h3>
              <p className="text-xs text-muted">Always here to help</p>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Close chat"
            className="flex h-8 w-8 items-center justify-center rounded-lg text-muted transition-colors hover:bg-line hover:text-primary"
          >
            <X size={18} />
          </button>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.length === 0 && (
            <div className="flex h-full flex-col items-center justify-center text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-ice/10 border border-ice/20">
                <MessageCircle size={28} className="text-ice" />
              </div>
              <h4 className="font-display text-lg font-medium text-primary mb-2">
                Welcome to Mialo
              </h4>
              <p className="text-sm text-muted max-w-[280px]">
                Ask us anything about our platform, solutions, or how we can help transform your operations.
              </p>
            </div>
          )}

          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm ${
                  msg.role === 'user'
                    ? 'bg-ice/90 text-white'
                    : 'bg-panel border border-line-2 text-ink'
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
        </div>

        {/* Input Area */}
        <div className="border-t border-line-2 p-4">
          <div className="flex items-end gap-2">
            <div className="flex-1 relative">
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                rows={1}
                className="w-full resize-none rounded-xl border border-line-2 bg-panel px-4 py-3 text-sm text-primary placeholder:text-faint focus:border-ice focus:outline-none focus:ring-1 focus:ring-ice/50 transition-colors"
                style={{
                  maxHeight: '120px',
                  minHeight: '44px',
                }}
              />
            </div>
            <button
              onClick={handleSend}
              disabled={!message.trim()}
              aria-label="Send message"
              className="flex h-11 w-11 items-center justify-center rounded-xl bg-ice text-white transition-all hover:bg-ice/90 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send size={18} />
            </button>
          </div>
          <p className="mt-2 text-xs text-faint text-center">
            Powered by Mialo Intelligence
          </p>
        </div>
      </div>
    </>
  );
}
