import './App.css';
import AcercaDeMi from './acercaDeMi';
import Inicio from './inicio';
import Certificaciones from './certificaciones';
import Conocimientos from './conocimientos';
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
      <Certificaciones/>
      <Conocimientos/>
      <Contacto/>
      <Educacion/>
      <Experiencia/>
    </div>
  );
}

export default App;
