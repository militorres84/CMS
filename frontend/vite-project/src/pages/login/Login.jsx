import React from 'react'
import './css/login.scss'
import logo from '../../assets/logo-musa.jpg'

const Login = () => {
  return (
    <div className='login-app-container'>
        <img src={logo} className='login-logo' alt="cms logo" />
    <div className='login-container'>
    
        <h1 className='login-welcome-text'>¡Hola!</h1>
        <div className='login-input-container'>
        <label htmlFor="username"
        className='login-username-label'>
        </label>
        <input
            className="login-username-input" 
            id="username"
            name="username"
            type="text"
            placeholder="Nombre o Correo"
            required></input>
    </div>

    <div>
        <label htmlFor="password"
        className="login-password-label">
        </label>
        <input
            className="login-password-input"
            id="password"
            name="password"
            type="password"
            placeholder="Contraseña"
            required></input>
    </div>

    <div className='checkbox-user-remember'>
        <label for="remember-username" 
        className="remember-user-checkbox">
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
    <a href="#" className='enter-as-guest'>Entrar como invitado</a>
    </div>

    <div>
        <button className="log-deskopt-btn">Entrar</button>
    </div>
    </div>
    </div>
    
  )
}

export default Login