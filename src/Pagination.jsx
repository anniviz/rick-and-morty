import './Pagination.css'

export default function Pagination({ currentPage, totalPages }) {
  return (
    <nav className="Pagination">
      <button
        className={
          currentPage !== 1
            ? 'Pagination__button Pagination__button'
            : 'Pagination__button'
        }
      >
        previous
      </button>
      {currentPage}/{totalPages}
      <button className="Pagination__button">next</button>
    </nav>
  )
}
