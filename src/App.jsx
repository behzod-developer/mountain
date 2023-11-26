import Navbar from "./components/navbar/Navbar"
import {Routes, Route} from "react-router-dom"
import Home from "./Pages/Home/Home"

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route 
          path="/"
          element={<Home />} />
      </Routes>
    </>
  )
}

export default App
