import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import BookList from "./pages/BookList"
import Book from "./pages/Book"
import NotFound from "./pages/NotFound"
import NewBook from "./pages/NewBook"
import Layout from "./layouts/Layout"

function App() {
  return (
    <Routes>
      <Route path="/books" element={<Layout />}>
        <Route index element={<BookList />} />
        <Route path=":title" element={<Book />} />
        <Route path="new" element={<NewBook />} />
      </Route>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App
