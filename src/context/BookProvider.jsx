import { useContext } from "react"
import { useReducer, createContext } from "react"

const BookContext = createContext({})

const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      return state.map((book) => {
        if (book.id === action.payload.id) {
          return { ...book, stock: book.stock + 1 }
        }
        return book
      })
    case "remove":
      return state.map((book) => {
        if (book.id === action.payload) {
          return { ...book, stock: book.stock > 0 ? book.stock - 1 : 0 }
        }
        return book
      })
    case "create":
      return [...state, action.payload]
    default:
      return state
  }
}

export const BookProvider = ({ children }) => {
  const [books, dispatch] = useReducer(reducer, [
    { id: 1, title: "Book 1", stock: 10 },
    { id: 2, title: "Book 2", stock: 10 },
    { id: 3, title: "Book 3", stock: 10 },
    { id: 4, title: "Book 4", stock: 10 },
  ])
  BookProvider.dispatch = dispatch
  return <BookContext.Provider value={books}>{children}</BookContext.Provider>
}

export const useBooks = () => {
  const context = useContext(BookContext)
  if (!context) {
    throw new Error("useBooks must be used within a BookProvider")
  }
  return context
}
