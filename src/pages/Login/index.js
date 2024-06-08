import React from "react";



function Login() {

  return (
    <div className='nav-bar-fixed'>
      <nav className='nav-container'>
        <div className='nav-wrapper blue'>
          <a id="brand-logo" href="/" className='brand-logo center'>Loja de Peças do Claudião</a>
        </div>
      </nav>
      <div className="container">
        <p>Faca seu login</p>
        <form>
          <label>Informe seu e-mail</label>
          <input type="text" id="lemail" name="lemail"  />
          <label>Informe sua senha</label>
          <input type="password" id="lpassword" name="lpassword"  />
        </form>
        <button className="waves-effect waves-light btn center" ><Link to="/home" className="waves-effect waves-light btn-large">Logi</Link>  </button>
      </div>
    </div>

  );
}

export default Login;
