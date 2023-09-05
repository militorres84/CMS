import React from 'react'
import './css/Login.css'

const Login = () => {
  return (
    <body id="login-body">
    <div>
        <h1 className='txt'>¡Hola!</h1>
        <div>
        <label for="username"
        className="label-log">
        </label>
        <input
            className="user-log" 
            id="username"
            name="username"
            type="text"
            placeholder="Nombre o Correo"
            required></input>
    </div>

    <div>
        <label for="password"
        className="label-log">
        </label>
        <input
            className="user-log"
            id="password"
            name="password"
            type="password"
            placeholder="Contraseña"
            required></input>
    </div>

    <div className='checkbox-password-recover'>
        <label for="remember-username" 
        className="remember-label">
            Recuerdame
        </label>
        <input type="checkbox" 
        name="recuerdame" 
        id="user-remember"></input>


    </div>

    <div>
        <a href="#" className="pass-recover">¿Olvidaste tu contraseña?</a>
    </div>

    <div>
        <p className="log-text">Entrar</p> 
        <button className="log-btn"> &gt; </button>
    </div>

    <div className='social-media-btn'>
        <p className='p-continue'>
        O continúa por...
    </p>
    <div>
    <button className="google-btn">G
    </button>
    <button className="facebook-btn">F
    </button>
    </div>

    </div>

    <div className='footer'>
        <p>¿No tienes una cuenta?</p>
    <a href="#">Entrar como invitado</a>
    </div>

    <div>
        <button className="log-deskopt-btn">Entrar</button>
    </div>

    </div>
    </body>
  )
}

export default Login