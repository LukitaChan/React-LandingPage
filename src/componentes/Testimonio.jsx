import React from "react";                    /*Hasta el 2017 era obligatorio*/
import '../hojas-de-estilo/Testimonio.css'

//Los props reciben valores y se usan en el componente
function Testimonio(props) {
  return (
    <div className ='contenedor-testimonio'>
      <img className ='imagen-testimonio'
      src={require(`../imagenes/${props.imagen}.jpeg`)}
      alt='foto de Kizuna' />
      <div className='contenedor-text-testimonio'>
        <p className='nombre-testimonio'> 
          <strong>{props.nombre}</strong> en <b>{props.pais}</b> </p>
        <p className='cargo-testimonio'> 
        {props.cargo} en <strong>{props.empresa}</strong> </p>
        <p className='texto-testimonio'> " {props.testimonio} " </p>
      </div>
    </div>
  );
}

// export function Testimonio() {    exportacion nombrada
/*function Testimonio() {
  return (
    <div className ='contenedor-testimonio'>
      <img className ='imagen-testimonio'
      src={require('../imagenes/Kizuna.jpeg')}
      alt='foto de Kizuna'/>
      <div className='contenedor-text-testimonio'>
        <p className='nombre-testimonio'> Kizuna AI </p>
        <p className='cargo-testimonio'> Profesional Videogames Player</p>
        <p className='texto-testimonio'> "Me gusta jugar videojuegos todo el dia; desde que despierto hasta que duermo. Me parece muy entretenido jugar y compartir experiencias con todos. Me encanta nintendo y sus franquicias.</p>
      </div>
    </div>
  );
}*/

export default Testimonio; //exportacion por defecto
//suponiendo que sea nombrada, se elimina la linea.