import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Context } from "../context";
import Cartpage from "../pages/Cartpage";

const Header = () => {
  const { cart } = useContext(Context);
  const navigate = useNavigate();
  function lets() {
    navigate("/carts");
  }
  return (
    <header className="container">
      <nav
        className=" navbar fixed-top bg-body-tertiary "
        style={{ backgroundColor: "#e3f2fd" }}
        data-bs-theme="light"
      >
        <div className="container">
          <h1>LOGO</h1>
          <div
            className="nav"
            style={{ display: `flex`, justifyContent: `space-between` }}
          >
            <NavLink to="/" className="primary">
              Home
            </NavLink>
            <NavLink to="/About" className="primary">
              About
            </NavLink>
            <NavLink to="/Details" className="primary">Details</NavLink>
            <button
              type="button"
              className="btn btn-primary position-relative"
              onClick={lets}
            >
              Inbox
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {cart.length}
                <span className="visually-hidden">unread messages</span>
              </span>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
