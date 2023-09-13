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
      
      <div className="purple-block">
      <div className="content-purple-block">
        <p>¿Estás listo<br />para empezar<br />a crear?</p>
        
      </div>
      </div>
      <h2 className="title">¿Por qué elegirnos?</h2>
      <div className="container-box">
        <div className="box">
          <img src={Diseño} alt="" />
          <h2>Diseños Increíbles</h2>
          <div className="container-p">
            <p>Cambia cómo se ve tu blog eligiendo colores, fuentes y bordes diferentes. Incluso podes tener control total del diseño.</p>
          </div>
        </div>
        <div className="box">
          <img src={FacilUso} alt="" />
          <h2>Fácil de Usar</h2>
          <div className="container-p">
            <p>Organiza tus textos y fotos de manera sencilla. Añade muchas cosas, como fotos profesionales, música, videos, documentos y más.</p>
          </div>
        </div>
        <div className="box">
          <img src={Plantillas} alt="" />
          <h2>Plantillas Personalizadas</h2>
          <div className="container-p">
            <p>Usa patrones ya preparados para hacer diseños llamativos en tus páginas y publicaciones.</p>
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
            en " " estás muy bien acompañado.
            <br />
            Registrate para saber por qué millones de personas
            han escrito sobre lo que les apasiona
          </p>
          <button className="buttom-green"><a href="#">Crea tu blog</a></button>
          
          </div>
        </div>
      </div>
      

      <Footer/>
    </>
  );
} 

export default Homepage
