import React from 'react';

const generalview = () =>{
    return(
        <body id='generalview-body'>
            <div className='header-view'>
                <img src={logo} className='logo-view' alt="cms logo" />
                <button className='view-add'>
                    + Añadir
                </button>
                <button className='view-edit'>
                   Editar
                </button>
                <button className='view-save-to-draft'>
                    Guardar en borrador
                </button>
            </div>

            <div className='view-menu'>
               <div className='menu-items'>
                <a href="#"> - </a>
                <a href="#"> - </a>
                <a href="#"> - </a>
                <a href="#"> - </a>
                <button className='close-menu'> Cerrar menu </button>
                </div>
             </div>
        </body>
    )
    
}

export default generalview