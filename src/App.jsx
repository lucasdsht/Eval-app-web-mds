import { Route } from "react-router-dom"
import { Routes } from "react-router-dom"
import { Add, Home, NotFound } from "./pages"
function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/add" element={<Add />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App
