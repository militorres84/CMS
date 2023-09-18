import React from "react";
import './Pagespost.scss';
import Footer from "../../components/footer/footer";

const Pagespost = () =>{
    return(
    <div id="pagespost-body">
         <div className="header-pagespost">
         <h1 className="pages-name"> MUSA </h1>
            <div className="componentes-pagespost">
                <div className="barra-de-busqueda">
                    <input className="textfield"
                    type="text"
                    placeholder="Busca aquello que te apasiona"
                    name="busqueda" 
                    />
                </div>
                 <div className="edit">
                     <button className="edits-pages"> Editar </button>
                 </div>
            </div>
        </div>

        <div className="single">

            <div className="content-post"> 
                  <img className="photo" src="https://i.pinimg.com/1200x/4e/ac/00/4eac00b6f3d29155a711acde4dfd8e15.jpg"></img>
            <div className="user">
                 <img className="img" src="https://tecnoguia.net/wp-content/uploads/2022/10/foto-de-perfil-redes-sociales.jpeg"></img>
            <div className="info">
                 <span>Jazmin</span>
                 <p>Hace dos dias</p>
            </div>
            </div>
            <h1>Flores: La magia para renovar el hogar</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi laborum impedit consequatur reprehenderit minima at magnam commodi explicabo necessitatibus velit facilis provident assumenda beatae, iure aperiam vero ad ipsum. Dolore.</p>
            </div>

            <div className="menu-post">
                <div className="post">
                    <img className="huerta" src="https://encolombia.com/wp-content/uploads/2023/03/Huerto-en-Casa.jpg"></img>
                    <h1> ¿Como hago mi propio huerta?</h1>
                    <button>Seguir leyendo</button>
                </div>
            </div>
        </div>

    <Footer />
    </div>
    )
}

export default Pagespost;