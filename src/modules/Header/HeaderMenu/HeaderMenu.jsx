import { NavLink } from "react-router-dom";

import st from "./header-menu.module.css";


const getLinkClassName = ({ isActive }) => {
    return isActive ? st.linkActive : st.link;
}

const HeaderMenu = () => {
    return (<nav>
        <NavLink
            to={"/"}
            className={getLinkClassName}
        >
            Home
        </NavLink>
        <NavLink
            to={"/movies"}
            className={getLinkClassName}
        >
            Movies
        </NavLink>
    </nav>
    )
}

export default HeaderMenu;