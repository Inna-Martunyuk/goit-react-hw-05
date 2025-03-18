import { NavLink } from "react-router-dom";
// import clsx from "clsx";
import css from "./Navigation.module.css";

// const buildLinkClass = ({ isActive }) => {
//   return clsx(css.link, isActive && css.active);
// };
export default function Navigation() {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/movies">MoviesPage</NavLink>
                </li>
            </ul>
        </nav>
    )
}