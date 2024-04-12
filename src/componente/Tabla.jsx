import React, {useState } from 'react';
import Modal from './Modal';

const Tabla = ({ datosFiltrados, numeroRegistros, actualizarDatos }) => {
  const [datos, setDatos] = useState(datosFiltrados.slice(0, numeroRegistros));
  const [idEliminar, setIdToDelete] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleDelete = (id) => {
    setIdToDelete(id);
    setShowModal(true);
  };

  const confirmDelete = () => {
    const nuevosDatos = datos.filter(objeto => objeto.id !== idEliminar);
    setDatos(nuevosDatos);
    actualizarDatos(nuevosDatos);
    setShowModal(false);
  };

  const closeModal = () => {
    setShowModal(false);
  };



  return (
    <div>
      <table className='table table-striped-columns'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {datos.map((objeto) => (
            <tr key={objeto.id}>
              <td>{objeto.id}</td>
              <td>{objeto.nombre}</td>
              <td>{objeto.descripcion}</td>
              <td>
                <button onClick={() => handleDelete(objeto.id)} >Eliminar </button>
                {/* <button onClick={() => handleEdit(objeto.id)} >Editar </button> */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Modal 
        isOpen={showModal}
        onClose={closeModal}
        onConfirm={confirmDelete}
      />
    </div>
  );
};

export default Tabla;