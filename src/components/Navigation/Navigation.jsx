import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import clsx from "clsx";

const linkColor = ({ isActive }) => {
  return clsx(css.navigationEl, isActive && css.active);
};

export default function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <>
      <header>
        <nav className={css.navBox}>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            {isLoggedIn && (
              <li>
                <NavLink to="/contacts">Contacts</NavLink>
              </li>
            )}
          </ul>
        </nav>
      </header>
    </>
  );
}
