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
        This is a test application for testing user-facing and non-user-facing changes
      </p>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Click count: {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test Hot Module Replacement
        </p>
        <p className="info-text">
          This button demonstrates interactive functionality in the application
        </p>
      </div>
      <InfoCard 
        title="About This App"
        description="This application is designed for testing relbot functionality with both user-facing and non-user-facing changes."
      />
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more about these technologies
      </p>
    </>
  )
}

export default App
