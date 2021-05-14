import './NavButton.css'

export default function NavButton({ navItem, activePage, setActivePage }) {
  return (
    <button
      className={
        navItem === activePage ? 'NavButton NavButton--active' : 'NavButton'
      }
      onClick={handleNavClick}
    >
      {navItem}
    </button>
  )

  function handleNavClick() {
    setActivePage(navItem)
  }
}
