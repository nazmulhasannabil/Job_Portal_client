import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header will be included through RootLayout */}
      <main className="flex-grow">
        {/* Content will be rendered through React Router */}
      </main>
      {/* Footer will be included through RootLayout */}
    </div>
  )
}

export default App