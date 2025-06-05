import React from "react"
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"
import Weather from "./Components/Weather"
import { Route, Routes } from "react-router-dom"
import About from "./About"

const  App =()=> {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Weather />} />

          <Route path="/about" element={<About />} />
        </Routes>
        {/* <Weather/> */}
      </main>
      <Footer />
    </div>
  )
}

export default App
