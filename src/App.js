import './App.css';
import Testimonio from './componentes/Testimonio';              //exportacion por defecto.
//import { Testimonio } from './componentes/Testimonio';          exportacion nombrada. Para varios elementos exportados.

//nuestra app renderiza nuestro componente Testimonio
function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1> Estas son algunos de mis Nendoroid </h1>
        <Testimonio 
          nombre='Merlin'
          pais='England'
          imagen='Merlin'
          cargo='Magician'
          empresa='Santo Grial'
          testimonio='Leyenda de la vida de Merlín está llena de misterio. Se dice que su madre era una princesa de Gales, pero también se dice que su padre era supuestamente un íncubo sobrenatural que vivía en el espacio entre la Tierra y la luna.'
        />

        <Testimonio 
          nombre='Kizuna AI'
          pais='Japon'
          imagen='Kizuna'
          cargo='Gameplayer'
          empresa='Nintendo'
          testimonio='Me gusta jugar videojuegos todo el dia; desde que despierto hasta que duermo. Me parece muy entretenido jugar y compartir experiencias con todos. Me encanta nintendo y sus franquicias'
        />

        <Testimonio 
          nombre='Lillie'
          pais='Alola'
          imagen='Lilie'
          cargo='Pokemon Trainer'
          empresa='Fundacion Eather'
          testimonio='Amo a los pokemon, en un principio les tenia miedo pero ahora son mis amigos. Los cuidare como ellos me protegieron una vez y hare lo mejor para ellos. En la fundacion amamos y cuidamos a los pokemon por igual.'
        />

      </div>
    </div>
  );
}

export default App;
