import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import M from "materialize-css";

function Sidebar() {

  useEffect(() => {
    M.AutoInit();
  }, [])

    return (
        <ul id="sidebar" className="sidenav blue lighten-5" >
            <li className="divider" tabIndex="-1"></li>
            <li><Link className="sidenav-close" to="/home">Tela Inicial</Link></li>
            <li className="divider" tabIndex="-1"></li>
            <li><Link className="sidenav-close" to="/profile">Perfil</Link></li>
        </ul>

    );
}

export default Sidebar;