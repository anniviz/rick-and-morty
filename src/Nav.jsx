import './Nav.css'
import NavButton from './NavButton'

export default function Nav() {
  const navItems = ['characters', 'episodes', 'locations']
  return (
    <nav className="Nav">
      {navItems.map(navItem => (
        <NavButton navItem={navItem}></NavButton>
      ))}
    </nav>
  )
}
