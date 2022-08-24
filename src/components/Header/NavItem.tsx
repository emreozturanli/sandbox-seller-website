import { NavLink } from "react-router-dom"

interface INavItemProps {
  name: string
}

const NavItem = ({ name }: INavItemProps) => {

  let url;
  switch (name){
    case 'Home':
      url =''
      break;
    case 'About':
      url = 'about'
      break;
    case 'Contact Us':
      url = 'contact'
      break;
    case 'Services':
      url = 'services'
      break;
  }

  return (
    <li>
      <NavLink
        to={`/${url}`}
        className={({ isActive }) => isActive ? "text-blue-300" : ""}
      >
        {name}
      </NavLink>
    </li>
  )
}

export default NavItem