function register() {
    return (
        <div className="App">
            <div class="container">
            <label for="username" class="label-reg"></label>
            <input class="user-reg" id="username" type="text" placeholder="Nombre de Usuario" required></input>
            
            <label for="email" class="label-reg"></label>
            <input class="user-reg" id="email" type="email" placeholder="Correo Electronico" required></input>

             <label for="password" class="label-reg"></label>
             <input class="user-reg" id="password" type="password" placeholder="Contraseña" required></input>
        
             <label for="password" class="label-reg"></label>
             <input class="user-reg" id="password" type="password" placeholder="Confirmar Contraseña" required></input>
            
             <br />
             <div class="register_more">
                <label class="checkbox">
                <span class="checkmark"></span>
                </label>
            </div>

            <p class="register-text"> Crear </p>
            <button class="reg-btn"> - </button> 
             <button class="reg-deskopt-btn"> Crear </button>
            <p> 
             O continua con...
            </p>
            <div class="social-media-btn">
                <button class="google-btn">G</button>
                <button class="facebook-btn">F</button>  
            </div>
            <p><a href="#">¿Ya tienes una cuenta? </a></p>    
        </div>
       </div> 
    );
}

export default register;