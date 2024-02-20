import { BookListItem } from "./BookListItem"

export const BookList = ({ books = [] }) => {
  return (
    <div>
      <h1>Book List</h1>
      <ul>
        {books?.map((book) => (
          <BookListItem key={book.id} book={book} />
        ))}
      </ul>
    </div>
  )
}
