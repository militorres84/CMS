import React from 'react';
import '../homepage/homepage.scss'
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import Diseño from '../../assets/diseño.png';
import FacilUso from '../../assets/facil-uso.png';
import Plantillas from '../../assets/plantillas.png'

const Homepage = () => {
  
  return (
    <>
      <Header />
      <body id="homepage-body">
      <div className="purple-block">
      <div className="content-purple-block">
        <p>¿Estás listo<br />para empezar?<br /></p>
        
      </div>
      </div>
      <h2 className="title">¿Por qué elegirnos?</h2>
      <div className="container-box">
        <div className="box">
          <img src={Diseño} alt="" />
          <h2>Comparte e Inspira</h2>
          <div className="container-p">
            <p>Comparte tus ideas e imágenes de forma instantánea y sin complicaciones. Tu creatividad merece ser vista</p>
          </div>
        </div>
        <div className="box">
          <img src={FacilUso} alt="" />
          <h2>Fácil de Usar</h2>
          <div className="container-p">
            <p>Con nuestro CMS, compartir tus ideas y fotos es tan sencillo con un par de clics.</p>
          </div>
        </div>
        <div className="box">
          <img src={Plantillas} alt="" />
          <h2>¡Conecta con tus amigos!</h2>
          <div className="container-p">
            <p> Musa te permite seguir a tus amigos y conocidos, manteniendo siempre la cercanía en la era digital.</p>
          </div>
        </div>
      </div>
     
      <div className='section'>
       
        <h2>¿Qué estas esperando?</h2>
     
        <div className="green-block">
        <div className="content-green-block">
          <p>
            Sumate a millones de blogueros
            <br />
            Tanto si queres compartir tus
            <br />
            conocimientos como dar las últimas
            <br />
            noticias o decir lo que se te pase
            por la cabeza,
            <br />
            en Musa estás muy bien acompañado.
            <br />
            Registrate para saber por qué millones de personas
            han escrito sobre lo que les apasiona
          </p>
          <button className="buttom-green"><a href="#">Crea tu blog</a></button>
          
          </div>
        </div>
      </div>
      </body>

      <Footer/>
    </>
  );
} 

export default Homepage
