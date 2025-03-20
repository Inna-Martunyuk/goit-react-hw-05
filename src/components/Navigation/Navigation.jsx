import { NavLink } from "react-router-dom";
import clsx from "clsx"; 
import css from "./Navigation.module.css";

export default function Navigation() {
  return (
    <nav className={css.nav}>
      <ul className={css.navList}>
        <li className={css.navItem}>
          <NavLink
            to="/"
            className={({ isActive }) => clsx(css.link, isActive && css.active)}
          >
            Home
          </NavLink>
        </li>
        <li className={css.navItem}>
          <NavLink
            to="/movies"
            className={({ isActive }) => clsx(css.link, isActive && css.active)}
          >
            Movies
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
