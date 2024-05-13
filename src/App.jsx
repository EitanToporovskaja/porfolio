import logo from './logo.svg';
import './App.css';
import AcercaDeMi from './AcercaDeMi';
import Inicio from './Inicio';
import Certificaciones from './Certificaciones';
import Conocimiento from './Conocimientos';
import Contacto from './Contacto';
import Educacion from './Educacion';
import Experiencia from './Experiencia';


function App() {
  const nombre="Eitan"
  const apellido="Toporovskaja"
  return (
    <div className="App">
     <AcercaDeMi nombre={nombre} apellido={apellido} />
      <Inicio nombre={nombre} apellido={apellido} /> 
      <Certificaciones/>
      <Conocimiento/>
      <Contacto/>
      <Educacion/>
      <Experiencia/>
    </div>
  );
}

export default App;
