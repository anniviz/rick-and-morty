import './Nav.css'
import NavButton from './NavButton'

export default function Nav() {
  const navItems = ['home', 'characters', 'locations']
  return (
    <nav className="Nav">
      {navItems.map(navItem => (
        <NavButton key={navItem} navItem={navItem}></NavButton>
      ))}
    </nav>
  )
}
