'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, ChevronDown } from 'lucide-react';

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const chatRef = useRef<HTMLDivElement>(null);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (chatRef.current && !chatRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[2000]">
      {/* Chat Toggle Button - Hides when open */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            onClick={() => setIsOpen(true)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-16 h-16 bg-primary rounded-full shadow-[0_0_30px_var(--primary)] flex items-center justify-center text-black relative z-10"
          >
            <MessageSquare size={28} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={chatRef}
            initial={{ opacity: 0, y: 50, scale: 0.9, transformOrigin: 'bottom right' }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="absolute bottom-0 right-0 w-[90vw] md:w-[380px] max-h-[80vh] h-[500px] glass rounded-[32px] shadow-2xl flex flex-col overflow-hidden border border-black/5"
          >
            {/* Header */}
            <div className="p-5 bg-black text-white flex items-center gap-4">
              <div className="w-10 h-10 bg-white rounded-full p-1.5 flex items-center justify-center">
                <img src="https://www.jiyasys.com/logo.png" alt="Jiyasys" className="w-full h-auto object-contain" />
              </div>
              <div>
                <h4 className="text-base font-black uppercase tracking-tight">Jiyasys AI</h4>
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-[9px] opacity-50 uppercase font-bold tracking-widest">Online</span>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="ml-auto opacity-50 hover:opacity-100 p-2">
                <ChevronDown size={20} />
              </button>
            </div>

            {/* Chat Body */}
            <div className="flex-grow p-5 overflow-y-auto space-y-5 bg-background transition-colors duration-500">
              <div className="flex flex-col items-start gap-1.5">
                <span className="text-[8px] font-black uppercase opacity-30 ml-2">Jiyasys Bot</span>
                <div className="max-w-[85%] p-4 bg-card border border-card-border rounded-2xl rounded-tl-none shadow-sm text-sm font-medium leading-relaxed">
                  Become a part of the Next Generation! How can I help you today?
                </div>
              </div>
            </div>

            {/* Input Area */}
            <div className="p-5 bg-card border-t border-card-border flex items-center gap-3 transition-colors duration-500">
              <input 
                type="text" 
                placeholder="Type your message..." 
                className="flex-grow bg-background border border-card-border p-3.5 rounded-xl text-sm focus:outline-none focus:border-primary transition-all text-foreground"
              />
              <button className="w-11 h-11 bg-foreground text-background rounded-xl flex items-center justify-center hover:bg-primary hover:text-black transition-all shrink-0">
                <Send size={18} />
              </button>
            </div>
            
            <div className="px-5 py-2 bg-card text-center border-t border-card-border">
              <span className="text-[8px] font-black uppercase opacity-20 tracking-widest text-foreground">Secure AI Assistant</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
