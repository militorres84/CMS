import React from 'react';
import '../generalview/generalview.scss';

const Generalview = () =>{
    return(
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

            <div className='write'>
                <div className='content'>
                    <input type="text" placeholder='title' />
                    <div className='editorContainer'>

                    </div>
                </div>
                <div className='menu'>
                    <div className='item'>i1</div>
                    <div className='item'>i2</div>
                </div>

            </div>









        </body>
    )
    
}

export default Generalview