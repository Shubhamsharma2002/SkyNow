import React from "react"
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"
import Weather from "./Components/Weather"

const  App =()=> {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Weather/>
      </main>
      <Footer />
    </div>
  )
}

export default App
