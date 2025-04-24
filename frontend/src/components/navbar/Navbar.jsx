import React from "react"
import "./navbar.css"
import { useTheme } from "../../utils/useTheme"
import { NavLink } from "react-router"

const navbar_menu = [
  {
    label: "home",
    path: "/",
  },
  {
    label: "cohort",
    path: "/cohert",
  },
  {
    label: "udemy",
    path: "/udemy",
  },
]

const Navbar = () => {
  const { isDark, toggleTheme } = useTheme()
  return (
    <div className="navbar-main__container">
      <div className="navbar">
        <div className="logo">
          <h4>chaicode</h4>
        </div>
        <div className="menus">
          <ul>
            {navbar_menu.map((menu, index) => (
              <NavLink
                key={index}
                to={menu.path}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                <li>{menu.label}</li>
              </NavLink>
            ))}
          </ul>
        </div>
        <div className="action_buttons">
          <button>login</button>
          <button onClick={toggleTheme}> {isDark ? "Light" : "Dark"}</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
