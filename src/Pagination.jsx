import './Pagination.css'

export default function Pagination({
  currentPage,
  totalPages,
  setActivePaginationPage,
}) {
  return (
    <nav className="Pagination">
      <button
        className={
          Number(currentPage) !== 1
            ? 'Pagination__button Pagination__button--active'
            : 'Pagination__button'
        }
        onClick={handlePreviousClick}
      >
        previous
      </button>
      {currentPage}/{totalPages}
      <button
        className={
          Number(currentPage) !== Number(totalPages)
            ? 'Pagination__button Pagination__button--active'
            : 'Pagination__button'
        }
        onClick={handleNextClick}
      >
        next
      </button>
    </nav>
  )

  function handlePreviousClick() {
    if (Number(currentPage) !== 1) {
      setActivePaginationPage(Number(currentPage) - 1)
    }
  }

  function handleNextClick() {
    if (Number(currentPage) !== Number(totalPages)) {
      setActivePaginationPage(Number(currentPage) + 1)
    }
  }
}
