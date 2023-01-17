import './App.css';
import { Testimonio } from './componentes/testimonio.jsx'

function App() {
  return (
    <div className="App">
      <div className='contenedor_principal'>
      <h1>Esto es lo que dicen nuestros alumnos sobre nosotros:</h1>
        <Testimonio 
          nombre = "Kratos"
          pais = 'Escandinavia'
          imagen = "kratos.jpg"
          cargo = "Guerrero y padre viudo"
          empresa= 'SCE Santa Monica'
          testimonio = {`"Cuando la gente me mira solo ve a rudo y furioso
          bárbaro que mata dioses bestias mitológicas y sentía que me estaba estancando profesionalmente, encasillado en un papel;
          sin embargo, gracias a estos cursos estoy demostrando que puedo hacer más doblegar a algunos de los seres más poderosos de la existencia.ç
          Además todo encaja muy bien con mi look hipster"`}
        />
        <Testimonio 
          nombre = "Michael Scott"
          pais = "Estados Unidos"
          imagen = "michael_scott.jpg"
          cargo = 'Director'
          empresa = 'Dunder-Mufflin'
          testimonio = {`"Vereis en realidad yo no necesito esto. Quiero decir, soy director de una oficina regional
          de Dunder-Mufflin. El caso es que hace poco vi una oferta de la empresa que ofrecía este curso para empleados de oficina. Subida de sueldo, unos días extras de vacaciones
          y vales de comida. Todos aspiraban a esta plaza y como director debo velar por la armonia entre compañeros de la oficina así que me adjudique de manera irregular la plaza, pero para evitar peleas... 
          ¿Están grabando? ¡Eso dijo ella!"`}
        />
        <Testimonio 
          nombre = "Sponge Bob"
          pais = "Bajo el Maaar"
          imagen = "bob_esponja.jpg"
          cargo = 'Cocinero'
          empresa = 'El cangrejo crujiente'
          testimonio = {`"¡¡Es genial!! Desde que tomé el curso se decir muchas cosas nuevas como
          Framework,  compilador, hoisting... Y muchas más que no recuerdo. Vivo bajo el mar y no encuentro tiendas de informática para hacerme con equipo,
          pero eso es aun mejor porque los demás tampoco encuentran y asumen que todo lo que digo es cierto y soy un profesional. 
          Así que sigo sin saber de qué pero ha supuesto un gran refuerzo para mi autoestima y reputación"`}
        />
      </div>
    </div>
  );
}

export default App;
