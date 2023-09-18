import React from 'react';
import '../dashboard/_dashboard.scss';

export default function Dashboard() {
  return (
    <>
        <div className='container'>
          <div className="Side-bar">
            <div className="Inicio-sesion">
              <h2> Iniciar sesión </h2>
            </div>
            <div className="List">
              <h2> Probar versión pro </h2>
              <div className="side-tool">
                <p> Inicio </p>
                <p> Proyectos </p>
                <p> Plantillas </p>
                <p> Trabajo en equipo </p>
                <p> Papelera </p>
              </div>
            </div>
          </div> 
          <div className="Center">
            <div className="navegation-bar">
              <h2> ¿Qué quieres diseñar hoy? </h2>
              <div className="container-fluid">
                <input 
                  class="control" 
                  type="text" 
                  name="Search" 
                  id="search" 
                  placeholder="Search">
                </input>
              </div>
              <div className="text-categoria">
                <p> Web </p>
                <p> Mobile </p>
                <p> Posts </p>
                <p> Desde 0 </p>
              </div>
            </div>
          </div>
          <div className="Container-plantillas">
            <h2> Plantillas </h2> 
            <h2> Herramientas </h2> 
          </div>
        </div>
    </>
  )
}
