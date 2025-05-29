import React from "react"
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <h1 className='text-3xl text-blue-400'>Weather app coming soon</h1>
      </main>
      <Footer />
    </div>
  )
}

export default App
