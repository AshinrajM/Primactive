import { Route, Routes } from "react-router-dom"
import Services from "./components/Services"
import Projects from "./components/Projects"
import Home from "./components/Home"



function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/projects" element={<Projects />} />
    </Routes>
  )
}

export default App
