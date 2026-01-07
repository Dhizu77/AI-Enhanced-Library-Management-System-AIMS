import React from 'react'
import Home from './pages/Home'

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="p-4 bg-white shadow">
        <h1 className="text-xl font-semibold">AIMS (Skeleton)</h1>
      </header>
      <main className="p-4">
        <Home />
      </main>
    </div>
  )
}
