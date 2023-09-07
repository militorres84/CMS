import React from "react"
import './css/register.scss'

function Register() {
    return (
        <body id="body-register">
            <div className="register-box">
                <div className="welcome-register">
                    <h1 className="">¡Bienvenido!</h1>
                </div>

                <div className="register-usser-email">
                    <label for="username" className="label-register-ussername">
                    </label>
                    <input
                        className="input-register-ussername"
                        id="username"
                        name="username"
                        type="text"
                        placeholder="Nombre de Usuario"
                        required></input>

                    <label for="email" className="label-register-email">
                    </label>
                    <input
                        className="input-register-email"
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Correo Electronico"
                        required></input>
                </div>

                <div className="register-password">
                    <label for="password" className="label-register-password">
                    </label>
                    <input
                        className="input-register-password"
                        id="password"
                        name="password"
                        type="password"
                        placeholder="Contraseña"
                        required></input>

                    <label for="password" className="label-register-passwordconfirmed">
                    </label>
                    <input
                        className="input-register-passwordconfirmed"
                        id="password"
                        name="password"
                        type="password"
                        placeholder="Confirmar Contraseña"
                        required></input>
                </div>

                <div className="checkbox-terms-and-conditions">
                    <label for="checkbox" className="terms-and-conditions"></label>
                    <input
                        checked="checked"
                        type="radio"
                        name="radio"
                        id="terms-and-conditions"
                        required> Aceptar <a href="#">  terminos y condiciones.</a>
                    </input>
                </div>

                <div>
                    <p className="register-text">Crear</p>
                    <button className="register-btn"> - </button>
                </div>

                <div className="social-media">
                    <p>
                        O continuar con...
                    </p>

                    <div>
                        <button className="google-btn">G</button>
                        <button className="facebook-btn">F</button>
                    </div>
                </div>

                <div className="existing-account">
                    <p>
                        <a href="#" className="login-sesion"> ¿Ya tienes una cuenta? </a>
                    </p>
                </div>

                <div>
                    <button className="register-btn-deskopt"> Crear </button>
                </div>

            </div>
        </body>
    );
}

export default Register