import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import InfoCard from './components/InfoCard'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
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
      <p className="read-the-docs">
        Learn more about Vite and React by clicking on their logos above
      </p>
    </>
  )
}

export default App
