import React from 'react';

const Tabla = ({ datosFiltrados, numeroRegistros }) => {
  const datosAMostrar = datosFiltrados.slice(0, numeroRegistros);

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Descripción</th>
        </tr>
      </thead>
      <tbody>
        {datosAMostrar.map((objeto) => (
          <tr key={objeto.id}>
            <td>{objeto.id}</td>
            <td>{objeto.nombre}</td>
            <td>{objeto.descripcion}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Tabla;
