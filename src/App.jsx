import { useState } from "react"
function App() {
  const [count] = useState(0)

  return (
    <p>{count}</p>
  )
}

export default App
