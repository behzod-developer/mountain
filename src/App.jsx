import Navbar from "./components/navbar/Navbar"
import { Routes, Route } from "react-router-dom"
import Homes from "./Layout/Homes/Homes"

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<Homes />} />
      </Routes>
    </>
  )
}

export default App
