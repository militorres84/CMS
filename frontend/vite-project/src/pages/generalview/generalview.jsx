import React from 'react';
import './Generalview.scss';
import Footer from '../../components/footer/footer';
import logo from '../../assets/logo-musa.jpg';

const Generalview = () => {
    return(

        <>
        <div id= 'generalview-body'>

            <div id='generalview-header'>

            <a href="/" className="logo">
                <img src={logo} alt="cms logo" />
            </a>
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
            </div>
            <div className='comment-container'>
                 <div className='comment-box'>
                <h2> ¿Que quieres compartir? </h2>
                    <input type="text" name="title" placeholder='Titulo...'/>
                    <textarea name='comment' placeholder='Escribe tu comentario...'></textarea>
              
                </div>
            </div>
           

            <Footer/> 
        </div>
        
       
        </>
    )
    
}

export default Generalview;