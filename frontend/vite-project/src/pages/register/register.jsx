import React from "react"
import './css/_register.scss'

function Register() {
    return (
        <div className="body-register">
            <div className="container-register">

                <div className="welcome-register">
                    <h1 className="welcome-register-text"> ¡Bienvenidos! </h1>
                </div>

            <label className="label-reg"></label>
            <input className="user-reg" id="username" type="text" placeholder="Nombre de Usuario" required></input>
            
            <label className="label-reg"></label>
            <input className="user-reg" id="email" type="email" placeholder="Correo Electronico" required></input>

            <label className="label-reg"></label>
            <input className="user-reg" id="password" type="password" placeholder="Contraseña" required></input>
        
            <label className="label-reg"></label>
            <input className="user-reg" id="confirm-password" type="password" placeholder="Confirmar Contraseña" required></input>

            <div className="checkbox-terms-and-conditions">
                <label className="label-checkbox-reg">
                </label>
                <input className="checked"
                        type="checkbox"
                        id="term-and-conditions"
                        name="Aceptar terminos y condiciones."
                        required>
                </input>
            </div>

            <p className="register-text"> Crear </p>
            <button className="reg-btn"> - </button> 
            <button className="reg-deskopt-btn"> Crear </button>
            <p className="socialmedia-text"> 
            O continua con...
            </p>
            <div className="socialmedia-btn">
                <button className="google-btn">G</button>
                <button className="facebook-btn">F</button>  
            </div> 
            <p><a href="#" className="login-sesion">¿Ya tienes una cuenta? </a></p>    
    </div>
   </div> 
    );
}

export default Register