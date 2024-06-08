import React from 'react';
import { Link } from 'react-router-dom'; 

function Initialpage() {
  return (
    <div className='nav-bar-fixed'>
      <nav className='nav-container'>
        <div className='nav-wrapper blue'>
          <a id="brand-logo" href="/" className='brand-logo center'>Gestão de Categorias</a>
        </div>
      </nav>
      <div className='container'>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className='container center'>
          <div className='logo-container'>
            <img src="logo1.png" alt='Logo' className='responsive-img' />
          </div>
          <br />
          <div className='row'>
            <Link to="/login" className="waves-effect waves-light btn-large">Acessar Sistema</Link>
          </div>
        </div>
        <br />
      </div>
    </div>
  );
}

export default Initialpage;
