import React, { useState, useEffect, useRef } from 'react'
import './ChatBot.css'

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef(null)
  const chatContainerRef = useRef(null)

  useEffect(() => {
    // Show greeting message when component mounts
    const greetingMessage = {
      id: Date.now(),
      text: "Hi! 👋 I'm Lama, a Software Engineering Student. Feel free to ask me anything about my projects, skills, or experience!",
      sender: 'bot',
      timestamp: new Date()
    }
    setMessages([greetingMessage])
  }, [])

  useEffect(() => {
    // Auto-scroll to bottom when new messages arrive
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const handleSendMessage = async (e) => {
    e.preventDefault()
    if (!inputValue.trim()) return

    const userMessage = {
      id: Date.now(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputValue('')
    setIsTyping(true)

    // Simulate bot response (you can replace this with actual API call)
    setTimeout(() => {
      const botResponse = {
        id: Date.now() + 1,
        text: "Thank you for your question! I'll get back to you soon. You can also reach me directly at Lamaf.akbar@gmail.com",
        sender: 'bot',
        timestamp: new Date()
      }
      setMessages(prev => [...prev, botResponse])
      setIsTyping(false)

      // Send question to email (using mailto or you can integrate EmailJS)
      sendQuestionToEmail(inputValue)
    }, 1500)
  }

  const sendQuestionToEmail = (question) => {
    // Create email link with the question
    const subject = encodeURIComponent('Question from Portfolio Visitor')
    const body = encodeURIComponent(`Question: ${question}\n\nPlease respond to this question.`)
    const emailLink = `mailto:Lamaf.akbar@gmail.com?subject=${subject}&body=${body}`
    
    // Open email client (optional - you can also use EmailJS for better UX)
    // window.location.href = emailLink
  }

  const toggleChat = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      {/* Chat Bot Avatar Button */}
      <div 
        className={`chatbot-toggle ${isOpen ? 'active' : ''}`}
        onClick={toggleChat}
        aria-label="Open chat"
      >
        <div className="chatbot-avatar">
          <div className="avatar-container">
            <div className="avatar-hair"></div>
            <div className="avatar-face">
              <div className="avatar-glasses">
                <div className="glasses-frame left"></div>
                <div className="glasses-bridge"></div>
                <div className="glasses-frame right"></div>
              </div>
              <div className="avatar-eye left"></div>
              <div className="avatar-eye right"></div>
              <div className="avatar-nose"></div>
              <div className="avatar-mouth"></div>
            </div>
          </div>
        </div>
        {!isOpen && <span className="chatbot-pulse"></span>}
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="chatbot-container" ref={chatContainerRef}>
          <div className="chatbot-header">
            <div className="chatbot-header-info">
              <div className="chatbot-header-avatar">
                <div className="avatar-container small">
                  <div className="avatar-hair"></div>
                  <div className="avatar-face">
                    <div className="avatar-glasses">
                      <div className="glasses-frame left"></div>
                      <div className="glasses-bridge"></div>
                      <div className="glasses-frame right"></div>
                    </div>
                    <div className="avatar-eye left"></div>
                    <div className="avatar-eye right"></div>
                    <div className="avatar-nose"></div>
                    <div className="avatar-mouth"></div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="chatbot-name">Lama</h3>
                <p className="chatbot-status">Online • Usually replies instantly</p>
              </div>
            </div>
            <button 
              className="chatbot-close"
              onClick={toggleChat}
              aria-label="Close chat"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>
          </div>

          <div className="chatbot-messages">
            {messages.map((message) => (
              <div 
                key={message.id} 
                className={`message ${message.sender}`}
              >
                {message.sender === 'bot' && (
                  <div className="message-avatar">
                    <div className="avatar-container tiny">
                      <div className="avatar-hair"></div>
                      <div className="avatar-face">
                        <div className="avatar-glasses">
                          <div className="glasses-frame left"></div>
                          <div className="glasses-bridge"></div>
                          <div className="glasses-frame right"></div>
                        </div>
                        <div className="avatar-eye left"></div>
                        <div className="avatar-eye right"></div>
                        <div className="avatar-nose"></div>
                        <div className="avatar-mouth"></div>
                      </div>
                    </div>
                  </div>
                )}
                <div className="message-content">
                  <p>{message.text}</p>
                  <span className="message-time">
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="message bot">
              <div className="message-avatar">
                <div className="avatar-container tiny">
                  <div className="avatar-hair"></div>
                  <div className="avatar-face">
                    <div className="avatar-glasses">
                      <div className="glasses-frame left"></div>
                      <div className="glasses-bridge"></div>
                      <div className="glasses-frame right"></div>
                    </div>
                    <div className="avatar-eye left"></div>
                    <div className="avatar-eye right"></div>
                    <div className="avatar-nose"></div>
                    <div className="avatar-mouth"></div>
                  </div>
                </div>
              </div>
                <div className="message-content">
                  <div className="typing-indicator">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <form className="chatbot-input-form" onSubmit={handleSendMessage}>
            <input
              type="text"
              className="chatbot-input"
              placeholder="Ask me anything..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              autoFocus
            />
            <button 
              type="submit" 
              className="chatbot-send-btn"
              disabled={!inputValue.trim()}
              aria-label="Send message"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="22" y1="2" x2="11" y2="13"/>
                <polygon points="22 2 15 22 11 13 2 9 22 2"/>
              </svg>
            </button>
          </form>
        </div>
      )}
    </>
  )
}

export default ChatBot

