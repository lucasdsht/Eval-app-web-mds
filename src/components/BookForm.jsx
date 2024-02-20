import { useState } from "react"
import { BookProvider, useBooks } from "../context/BookProvider"

export const BookForm = () => {
  const [title, setTitle] = useState("")
  const [stock, setStock] = useState(0)
  const dispatch = BookProvider.dispatch
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch({ type: "create", payload: { title, stock } })
    setTitle("")
    setStock(0)
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="number"
        value={stock}
        onChange={(e) => setStock(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  )
}
