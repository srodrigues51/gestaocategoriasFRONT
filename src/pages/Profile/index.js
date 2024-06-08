import React, {  useEffect  } from 'react';
import Sidebar from '../../components/sidebar';
import Navbar from '../../components/navbar';

import M from "materialize-css";

function Profile() {


    useEffect(() => {
        M.AutoInit();
    }, []);

    return (
        <>
            <Navbar />
            <Sidebar />
            <br></br>
            <br></br>
            <div className='container row'>
                <ul className="collection with-header">
                    <li className="collection-header"><h3>Perfil</h3></li>
                    <li className="collection-item">
                        <h5>Nome:</h5>
                    </li>
                    <li className="collection-item">
                        <h5>E-mail:</h5>
                    </li>
                </ul>
            </div>

        </>
    );
}

export default Profile;