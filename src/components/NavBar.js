import { NavLink } from "react-router-dom";
import "../components/harry.css";

const NavBar = () => {
  return (
    <div>
      <NavLink className="navItem" to="/">
        Home
      </NavLink>
      {"-"}
      <NavLink className="navItem" to="/characters">
        Characters
      </NavLink>
    </div>
  );
};

export default NavBar;
