import "./Nav.css";
import logo_dark from "../../images/logo_coffeeshop_dark.svg";

const Nav = () => {
  return (
    <>
      <nav class="nav">
        <img src={logo_dark} alt="Triple Espresso Logo" class="nav__logo" />
        <ul class="nav__links">
          <li>
            <a class="nav__link">Recipes</a>
          </li>
          <li>
            <a class="nav__link">Book a Table</a>
          </li>
          <li>
            <a class="nav__link">Menu</a>
          </li>
          <li>
            <a class="nav__link">Contacts</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
