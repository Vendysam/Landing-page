import './NavBar.css'

const NavBar = () => {
  return (
    <div>
      <div className='nav'> 
      <div className="nav-logo">Landing Page</div>
        <ul className="nav-menu">
          <li>Home</li>
          <li>Explore</li>
          <li>About</li>
          <li className='nav-contact'>Contact</li>
        </ul>
      </div>
    </div>
  )
}

export default NavBar
