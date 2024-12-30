import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <NavLink className="nav-links nav-logo" to="/">
        E-Commerce
      </NavLink>
      <NavLink className="nav-links" to="/">
        Home
      </NavLink>
      <NavLink className="nav-links" to="/products?page=1&perPage=12">
        Products
      </NavLink>
    </div>
  );
};
export default Navbar;
