import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Context } from "../context";
import { useTranslation } from "react-i18next";
import Cartpage from "../pages/Cartpage";
const Header = () => {
    const {t} = useTranslation();
    const {i18n} = useTranslation();
    function changeLang(e){
   i18n.changeLanguage(e.target.value);

    }
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
            <NavLink to="/">{t("header.Home")}</NavLink>
            <NavLink to="/About">{t("header.About")}</NavLink>
            <NavLink to="/Details">{t("header.Log In")}</NavLink>
            <NavLink to="/details" >details</NavLink>
            <select name="" onChange={changeLang} id="">
              <option value="uz">uz</option>
              <option value="en">en</option>
            </select>
            <button
              type="button"
              className="btn btn-primary position-relative"
              onClick={lets}
            >
              {t("header.Cart")}
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
