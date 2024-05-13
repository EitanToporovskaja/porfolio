import logo from './logo.svg';
import './App.css';
import AcercaDeMi from './AcercaDeMi';
import Inicio from './Inicio';
import Certificaciones from './certificaciones';
import Conocimiento from './conocimientos';
import Contacto from './contacto';
import Educacion from './educacion';
import Experiencia from './experiencia';


function App() {
  const nombre="Eitan"
  const apellido="Toporovskaja"
  return (
    <div className="App">
     <AcercaDeMi nombre={nombre} apellido={apellido} />
      <Inicio nombre={nombre} apellido={apellido} /> 
      
    </div>
  );
}

export default App;
