import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import InfoCard from './components/InfoCard'
import './App.css'

const FEEDBACK_OPTIONS = [
  { emoji: '👍', label: 'Helpful' },
  { emoji: '❤️', label: 'Love it' },
  { emoji: '🎉', label: 'Exciting' },
]

function App() {
  const [count, setCount] = useState(0)
  const [feedback, setFeedback] = useState(null)
  const [isDarkMode, setIsDarkMode] = useState(
    () => window.matchMedia('(prefers-color-scheme: dark)').matches
  )

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light')
  }, [isDarkMode])

  const toggleTheme = () => setIsDarkMode((prev) => !prev)

  return (
    <>
      <div className="theme-toggle-container">
        <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
          {isDarkMode ? '☀️ Light mode' : '🌙 Dark mode'}
        </button>
      </div>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Welcome to Relbot Test App</h1>
      <p className="subtitle">
        A modern React application built with Vite for testing release automation
      </p>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Counter: {count}
        </button>
        <p>
          Make changes to <code>src/App.jsx</code> and see them update instantly with Hot Module Replacement
        </p>
        <p className="info-text">
          Use the counter button above to interact with the application
        </p>
      </div>
      <InfoCard 
        title="About This App"
        description="This application demonstrates modern web development practices and is used for testing automated release note generation."
      />
      <InfoCard 
        title="Theme Toggle"
        description="Switch between light and dark mode using the button in the top-right corner for a more comfortable viewing experience."
      />
      <div className="feedback-card card">
        <h3>How was your experience?</h3>
        <p className="feedback-prompt">Tap an emoji to share quick feedback</p>
        <div className="feedback-options">
          {FEEDBACK_OPTIONS.map(({ emoji, label }) => (
            <button
              key={emoji}
              className={`feedback-btn ${feedback === emoji ? 'selected' : ''}`}
              onClick={() => setFeedback(emoji)}
              aria-label={label}
            >
              {emoji}
            </button>
          ))}
        </div>
        {feedback && (
          <p className="feedback-thanks">Thanks for your feedback! {feedback}</p>
        )}
      </div>
      <p className="read-the-docs">
        Learn more about Vite and React by clicking on their logos above
      </p>
    </>
  )
}

export default App
