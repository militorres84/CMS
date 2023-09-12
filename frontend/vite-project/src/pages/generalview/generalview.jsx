import React from 'react';
import './Generalview.scss';

const Generalview = () => {
    return(
        <>
        <body id='generalview-body'>
            <div className='header-view'>
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
        </>
    )
    
}

export default Generalview;