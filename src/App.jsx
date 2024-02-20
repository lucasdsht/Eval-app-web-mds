import { Route } from "react-router-dom"
import { Routes } from "react-router-dom"
import { Add, Home, NotFound } from "./pages"
import { Layout } from "./components/Layout"
function App() {

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<Add />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  )
}

export default App
