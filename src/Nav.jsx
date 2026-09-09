import { Link, NavLink, Outlet } from "react-router-dom"

function Nav() {
  return (
    <>
      <nav>
        <h1>Logo</h1>
        <ul className="nav-links">
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/artist'>Artist</NavLink>
          <NavLink to='/albums'>Albums</NavLink>
        </ul>
      </nav>
    </>
  )
}

export default Nav