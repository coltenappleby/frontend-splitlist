import React from 'react';
import { NavLink } from 'react-router-dom';



function NavBar() {

return(
    <NavLink
        to="/"
        exact
        activeStyle = {{
        background: "rgb(186, 197, 206)"
        }}
    >
        All Lists
    </NavLink>
)




}

export default NavBar;