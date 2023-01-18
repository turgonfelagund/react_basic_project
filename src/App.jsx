import './App.css';
import { Testimonio } from './componentes/testimonio.jsx'
import tt from './componentes/texto_testimonios';

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
          testimonio = {tt.kratos}
        />
        <Testimonio 
          nombre = "Michael Scott"
          pais = "Estados Unidos"
          imagen = "michael_scott.jpg"
          cargo = 'Director'
          empresa = 'Dunder-Mufflin'
          testimonio = {tt.michael}
        />
        <Testimonio 
          nombre = "Sponge Bob"
          pais = "Bajo el Maaar"
          imagen = "bob_esponja.jpg"
          cargo = 'Cocinero'
          empresa = 'El cangrejo crujiente'
          testimonio = {tt.bob_esponja}
        />
      </div>
    </div>
  );
}

export default App;
