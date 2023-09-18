import React from "react";
import Postcomponent from "../../components/post/postcomponent"; 
import './Pagespost.scss';

const Pagespost = () =>{
    return(
    <div id="pagespost-body">
        
        <div className="header-pagespost">
            <div className="componentes-pagespost">
            <h1 className="pages-name"> MUSA </h1>
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

        <div className="banner-pagespost">
            <div className="banner-icon">
              <button className="more-icon"> +  </button>
              <button className="more-icon"> Parta ti </button>
              <button className="more-icon"> Siguiendo </button>
            </div> 
        </div>

        <div className="post-component">
            <Postcomponent />
            <Postcomponent />
        </div>

    </div>
    )
}

export default Pagespost;