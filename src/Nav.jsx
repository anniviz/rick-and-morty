import './Nav.css'
import NavButton from './NavButton'

export default function Nav({ navItems, activePage, setActivePage }) {
  return (
    <nav className="Nav">
      {navItems.map(navItem => (
        <NavButton
          key={navItem}
          navItem={navItem}
          activePage={activePage}
          setActivePage={setActivePage}
        ></NavButton>
      ))}
    </nav>
  )
}
