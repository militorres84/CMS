import React from 'react'

export default function Dashboard() {
  return (
    <>
          <div class="Side-bar">
            <div class="Inicio-sesion">
              <h2> Iniciar sesión </h2>
            </div>
            <div class="List">
              <h2> Probar versión pro </h2>
              <div class="side-tool">
                <p> Inicio </p>
                <p> Proyectos </p>
                <p> Plantillas </p>
                <p> Trabajo en equipo </p>
                <p> Papelera </p>
              </div>
            </div>
          </div> 
          <div class="Center">
            <div class="navegation-bar">
              <h2> ¿Qué quieres diseñar hoy? </h2>
              <div class="container-fluid">
                <input 
                  class="control" 
                  type="text" 
                  name="Search" 
                  id="search" 
                  placeholder="Search">
                </input>
              </div>
              <div class="text-categoria">
                <p> Web </p>
                <p> Mobile </p>
                <p> Posts </p>
                <p> Desde 0 </p>
              </div>
            </div>
          </div>
          <div class="Container-plantillas">
            <h2> Plantillas </h2> 
            <h2> Herramientas </h2> 
          </div>
    </>
  )
}
