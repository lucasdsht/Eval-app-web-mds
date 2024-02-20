import { BookList } from "../components"
import { useBooks } from "../context/BookProvider"

export const Home = () => {
  const books = useBooks()
  return (
    <div>
      <h1>Home</h1>
      <BookList books={books} />
    </div>
  )
}
