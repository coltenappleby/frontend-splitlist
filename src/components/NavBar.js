import React from 'react';
import { NavLink } from 'react-router-dom';



function NavBar() {

return(
    <div className="NavBar" >
        <NavLink
            to="/"
            exact
            activeStyle = {{
            background: "blue"
            }}
        >
            All Lists 
        </NavLink>
        <NavLink
            to="/users/14"
            exact
            activeStyle = {{
            background: "red"
            }}
            >
            User14
        </NavLink>
    </div>
)




}

export default NavBar;