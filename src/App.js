import React, { useState } from 'react';
import Buscador from "./componente/Buscador";
import Tabla from './componente/Tabla';
import Array from './Array';
import Select from './componente/Select';
import Info from './componente/Info';



function App() {
  const [terminoBusqueda, setTerminoBusqueda] = useState('');
  const [datosFiltrados, setDatosFiltrados] = useState([]);
  const [numeroRegistros, setNumeroRegistros] = useState(20); // Estado para almacenar la opción seleccionada

  const buscarDatos = (termino) => {
    setTerminoBusqueda(termino);

    if (termino.trim() === '') {
      setDatosFiltrados([]);
    } else {
      const datosFiltrados = Array.filter((objeto) =>
        objeto.nombre.toLowerCase().startsWith(termino.toLowerCase())
      );
      setDatosFiltrados(datosFiltrados);
    }
  };

  const handleNumeroRegistrosChange = (numero) => {
    setNumeroRegistros(numero);
  };

  return (
    <div>
      <h1>Buscador de Datos</h1>
      <Select onNumeroRegistrosChange={handleNumeroRegistrosChange} />
      <Buscador onBuscar={buscarDatos} />
      {terminoBusqueda && <Tabla datosFiltrados={datosFiltrados} numeroRegistros={numeroRegistros} />}
      {!terminoBusqueda && <Tabla datosFiltrados={Array} numeroRegistros={numeroRegistros} />}
      <Info registrosMostrados={Math.min(numeroRegistros, datosFiltrados.length)}totalRegistros={datosFiltrados.length} />
    </div>
  );
}

export default App;
