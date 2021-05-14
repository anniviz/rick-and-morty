import './Header.css'
import logo from './rick-and-morty-header.png'

export default function Header() {
  return (
    <h1 className="Header">
      <img src={logo} alt="rick and morty" className="Header_img" />
    </h1>
  )
}
