import React from "react";
import '../register/css/register.css'

const register = () => {
    return (
        <div className="App">
            <div className="container">
            <label for="username" className="label-reg"></label>
            <input className="user-reg" id="username" type="text" placeholder="Nombre de Usuario" required></input>
            
            <label for="email" className="label-reg"></label>
            <input className="user-reg" id="email" type="email" placeholder="Correo Electronico" required></input>

             <label for="password" className="label-reg"></label>
             <input className="user-reg" id="password" type="password" placeholder="Contraseña" required></input>
        
             <label for="password" className="label-reg"></label>
             <input className="user-reg" id="password" type="password" placeholder="Confirmar Contraseña" required></input>
            
             <br />
             <div className="register_more">
                <label className="checkbox">
                <span className="checkmark"></span>
                </label>
            </div>

            <p className="register-text"> Crear </p>
            <button className="reg-btn"> - </button> 
             <button className="reg-deskopt-btn"> Crear </button>
            <p> 
             O continua con...
            </p>
            <div className="social-media-btn">
                <button className="google-btn">G</button>
                <button className="facebook-btn">F</button>  
            </div>
            <p><a href="#">¿Ya tienes una cuenta? </a></p>    
        </div>
       </div> 
    );
}

export default register;