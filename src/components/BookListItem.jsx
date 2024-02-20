import { BookProvider } from "../context/BookProvider"

export const BookListItem = ({ book }) => {
  const style = {
    backgroundColor: book.stock === 0 ? "gray" : "#000000",
    display: "flex",
    justifyContent: "space-between",
    padding: "10px",
    margin: "10px",
    width: "500px",
  }
  return (
    <li style={style}>
      <span>{book.title}</span>
      <span>{book.stock}</span>
      <div>
        <button onClick={() => BookProvider.dispatch({ type: "add", payload: book })}>
          +
        </button>
        <button disabled={book?.stock == 0} onClick={() => BookProvider.dispatch({ type: "remove", payload: book.id })}>
          -
        </button>
      </div>
    </li>
  )
}
