import { NavLink } from "react-router-dom";

import st from "./header-menu.module.css";


const getLinkClassName = ({ isActive }) => {
    return isActive ? st.linkActive : st.link;
}

const HeaderMenu = () => {
    return (
        <div className={st.navbar}>
            <NavLink
                to={"/"}
                className={getLinkClassName}
            >
                Home
            </NavLink>
            <NavLink
                to={"/movies-search"}
                className={getLinkClassName}
            >
                Search Movies
            </NavLink>

        </div>
    )
}

export default HeaderMenu;

