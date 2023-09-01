import React from 'react'
import './css/Login.css'

const Login = () => {
  return (
    <div>
        <h1 className='txt'>¡Hola!</h1>
        <div>
        <label for="username"
        className="label-log">
        </label>
        <input
            class="user-log" 
            id="username"
            name="username"
            type="text"
            placeholder="Nombre o Correo"
            required></input>
    </div>

    <div>
        <label for="password"
        class="label-log">
        </label>
        <input
            class="user-log"
            id="password"
            name="password"
            type="password"
            placeholder="Contraseña"
            required></input>
    </div>

    <div className='checkbox-password-recover'>
        <label for="remember-username" 
        class="remember-label">
            Recuerdame
        </label>
        <input type="checkbox" 
        name="recuerdame" 
        id="user-remember"></input>


    </div>

    <div>
        <a href="#" class="pass-recover">¿Olvidaste tu contraseña?</a>
    </div>

    <div>
        <p class="log-text">Entrar</p> 
        <button class="log-btn"> &gt; </button>
    </div>

    <div className='social-media-btn'>
        <p className='p-continue'>
        O continúa por...
    </p>
    <div>
    <button class="google-btn">G
    </button>
    <button class="facebook-btn">F
    </button>
    </div>

    </div>

    <div className='footer'>
        <p>¿No tienes una cuenta?</p>
    <a href="#">Entrar como invitado</a>
    </div>

    <div>
        <button class="log-deskopt-btn">Entrar</button>
    </div>

    </div>
  )
}

export default Login