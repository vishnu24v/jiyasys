'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, ChevronUp, MoreHorizontal, Power, Volume2, Mail, ArrowLeft, MoreVertical } from 'lucide-react';

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [stage, setStage] = useState<'list' | 'chat'>('list');
  const [showPopup, setShowPopup] = useState(true);
  const [messages, setMessages] = useState<{ role: 'bot' | 'user', text: string }[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [showEndConfirm, setShowEndConfirm] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const chatRef = useRef<HTMLDivElement>(null);

  const initialBotMsg = "Hi, What Can I help You With Today?";

  const handleStartChat = () => {
    setStage('chat');
    if (messages.length === 0) {
      setIsTyping(true);
      setTimeout(() => {
        setMessages([{ role: 'bot', text: initialBotMsg }]);
        setIsTyping(false);
      }, 1500);
    }
  };

  const handleSuggestion = (text: string) => {
    setMessages(prev => [...prev, { role: 'user', text }]);
    setIsTyping(true);
    setTimeout(() => {
      setMessages(prev => [...prev, { role: 'bot', text: "Thank you for your interest! A Jiyasys expert will connect with you shortly." }]);
      setIsTyping(false);
    }, 2000);
  };

  const endChat = () => {
    setStage('list');
    setMessages([]);
    setShowEndConfirm(false);
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[3000]">
      {/* Initial Popup Bubble */}
      <AnimatePresence>
        {showPopup && !isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="absolute bottom-20 right-0 w-64 bg-white p-4 rounded-3xl shadow-2xl border border-black/5 flex flex-col gap-1 pointer-events-auto"
          >
            <button onClick={() => setShowPopup(false)} className="absolute -top-2 -right-2 w-6 h-6 bg-black text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
              <X size={12} />
            </button>
            <p className="text-sm font-bold text-black">Hi There!!</p>
            <p className="text-[13px] text-black/60 font-medium">How Can I help you today?</p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Draggable Container */}
      <motion.div
        drag
        dragMomentum={false}
        className="relative"
      >
        {/* Toggle Button (Always Visible) */}
        <motion.button
          onClick={() => { setIsOpen(!isOpen); setShowPopup(false); }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="absolute bottom-0 right-0 w-16 h-16 bg-[#4a1a5a] rounded-full shadow-2xl flex items-center justify-center text-white cursor-pointer z-50"
        >
          {isOpen ? <ChevronUp size={28} /> : <MessageSquare size={28} />}
        </motion.button>

        {/* Chat Window */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="absolute bottom-20 right-0 w-[380px] h-[600px] bg-white shadow-[0_20px_60px_rgba(0,0,0,0.2)] overflow-hidden flex flex-col border border-black/5 rounded-l-[32px] rounded-r-none"
            >
              {/* Header - Purple */}
              <div className="p-6 bg-[#4a1a5a] text-white flex items-center justify-between">
                <div className="flex items-center gap-4">
                  {stage === 'chat' && (
                    <button onClick={() => setStage('list')} className="p-2 hover:bg-white/10 rounded-full transition-colors">
                      <ArrowLeft size={20} />
                    </button>
                  )}
                  {stage === 'list' ? (
                    <>
                      <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                        <MessageSquare size={20} />
                      </div>
                      <h3 className="text-xl font-bold">Conversation(s)</h3>
                    </>
                  ) : (
                    <>
                      <div className="w-10 h-10 bg-white rounded-full p-1.5 overflow-hidden">
                        <img src="https://www.jiyasys.com/logo.png" alt="Logo" className="w-full h-full object-contain" />
                      </div>
                      <h3 className="text-xl font-bold">Jiyasys</h3>
                    </>
                  )}
                </div>
              </div>

              {/* Body */}
              <div className="flex-grow overflow-y-auto p-6 bg-gray-50 flex flex-col">
                {stage === 'list' ? (
                  <button 
                    onClick={handleStartChat}
                    className="w-full bg-white p-4 rounded-2xl shadow-sm border border-black/5 flex items-center gap-4 hover:bg-gray-100 transition-colors group"
                  >
                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center p-2 group-hover:bg-white transition-colors">
                      <img src="https://www.jiyasys.com/logo.png" alt="Logo" className="w-full h-full object-contain opacity-40 group-hover:opacity-100" />
                    </div>
                    <div className="text-left flex-grow">
                      <div className="flex justify-between items-center mb-1">
                        <p className="font-bold text-black">Jiyasys</p>
                        <span className="text-[10px] opacity-40 uppercase">Just now</span>
                      </div>
                      <p className="text-sm text-black/60 line-clamp-1">{initialBotMsg}</p>
                    </div>
                    <div className="w-2 h-2 bg-[#4a1a5a] rounded-full" />
                  </button>
                ) : (
                  <div className="space-y-6">
                    {messages.map((msg, i) => (
                      <div key={i} className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}>
                        <p className="text-[10px] font-bold opacity-30 mb-2 uppercase px-2">
                          {msg.role === 'bot' ? 'Jiyasys' : 'You'}
                        </p>
                        <div className={`max-w-[85%] p-4 text-sm font-medium leading-relaxed shadow-sm ${
                          msg.role === 'bot' 
                            ? 'bg-white text-black rounded-3xl rounded-tl-none border border-black/5' 
                            : 'bg-[#4a1a5a] text-white rounded-3xl rounded-tr-none'
                        }`}>
                          {msg.text}
                        </div>
                      </div>
                    ))}
                    
                    {isTyping && (
                      <div className="flex flex-col items-start">
                        <p className="text-[10px] font-bold opacity-30 mb-2 uppercase">Jiyasys</p>
                        <div className="bg-white p-4 rounded-3xl rounded-tl-none border border-black/5 flex gap-1">
                          <div className="w-1.5 h-1.5 bg-black/20 rounded-full animate-bounce" />
                          <div className="w-1.5 h-1.5 bg-black/20 rounded-full animate-bounce [animation-delay:0.2s]" />
                          <div className="w-1.5 h-1.5 bg-black/20 rounded-full animate-bounce [animation-delay:0.4s]" />
                        </div>
                      </div>
                    )}

                    {messages.length === 1 && !isTyping && (
                      <div className="flex flex-col items-end gap-3 pt-4">
                        <p className="text-[10px] font-bold opacity-30 uppercase px-2">Suggestions</p>
                        <div className="flex flex-wrap justify-end gap-2">
                          {['Join Our Team', 'Start a Project'].map(suggestion => (
                            <button 
                              key={suggestion}
                              onClick={() => handleSuggestion(suggestion)}
                              className="px-6 py-3 bg-white border border-[#4a1a5a]/20 text-[#4a1a5a] font-bold text-sm rounded-full hover:bg-[#4a1a5a] hover:text-white transition-all shadow-sm"
                            >
                              {suggestion}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Footer / Input Area */}
              {stage === 'chat' && (
                <div className="p-6 bg-white border-t border-black/5 relative">
                  <div className="flex items-center gap-3">
                    <input 
                      type="text" 
                      placeholder="Type a message..." 
                      className="flex-grow text-sm font-medium outline-none"
                    />
                    
                    <div className="flex items-center gap-4 text-gray-400 relative">
                      {/* Settings Trigger */}
                      <div className="relative">
                        <button onClick={() => setShowSettings(!showSettings)} className="hover:text-black transition-colors">
                          <MoreVertical size={20} />
                        </button>
                        
                        <AnimatePresence>
                          {showSettings && (
                            <motion.div 
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: 10 }}
                              className="absolute bottom-full right-0 mb-4 w-48 bg-white rounded-2xl shadow-2xl border border-black/5 overflow-hidden z-20"
                            >
                              <button className="w-full p-4 flex items-center gap-3 text-sm font-bold text-black hover:bg-gray-50 border-b border-black/5">
                                <Volume2 size={16} /> Mute
                              </button>
                              <button className="w-full p-4 flex items-center gap-3 text-sm font-bold text-black hover:bg-gray-50">
                                <Mail size={16} /> Send email
                              </button>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>

                      {/* Power / End Chat Trigger */}
                      <button 
                        onClick={() => setShowEndConfirm(true)}
                        className="hover:text-red-500 transition-colors"
                      >
                        <Power size={20} />
                      </button>
                    </div>
                  </div>

                  {/* End Chat Confirmation */}
                  <AnimatePresence>
                    {showEndConfirm && (
                      <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-white/90 backdrop-blur-sm z-30 flex items-center justify-center p-8 text-center"
                      >
                        <div className="space-y-6">
                          <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto">
                            <Power size={32} />
                          </div>
                          <div>
                            <h4 className="text-xl font-bold text-black mb-2">End chat</h4>
                            <p className="text-sm text-black/50 font-medium">Are you sure you want to end this chat session?</p>
                          </div>
                          <div className="flex gap-4">
                            <button onClick={() => setShowEndConfirm(false)} className="flex-1 py-4 bg-gray-100 text-black font-bold text-sm rounded-2xl">Cancel</button>
                            <button onClick={endChat} className="flex-1 py-4 bg-red-600 text-white font-bold text-sm rounded-2xl">End</button>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
