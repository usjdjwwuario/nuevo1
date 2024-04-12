import React, { useState } from 'react';
import Buscador from "./componente/Buscador";
import Tabla from './componente/Tabla';
import Select from './componente/Select';
import Info from './componente/Info';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { Table, Button, Container, Modal, ModalBody, ModalHeader, FormGroup, ModalFooter } from "reactstrap"

const data = [
  { id: 1, nombre: 'Alexis', descripcion: '18 años' },
  { id: 2, nombre: 'Alejandra', descripcion: '20 años' },
  { id: 3, nombre: 'Manuel', descripcion: '15 años' },
  { id: 4, nombre: 'Sophie', descripcion: '23 años' },
  { id: 5, nombre: 'Sandra', descripcion: '15 años' },
  { id: 6, nombre: 'Ricardo', descripcion: '25 años' },
  { id: 7, nombre: 'María', descripcion: '30 años' },
  { id: 8, nombre: 'Juan', descripcion: '19 años' },
  { id: 9, nombre: 'Laura', descripcion: '22 años' },
  { id: 10, nombre: 'Pedro', descripcion: '24 años' },
  { id: 11, nombre: 'Luis', descripcion: '21 años' },
  { id: 12, nombre: 'Ana', descripcion: '26 años' },
  { id: 13, nombre: 'Carlos', descripcion: '27 años' },
  { id: 14, nombre: 'Marta', descripcion: '28 años' },
  { id: 15, nombre: 'Pablo', descripcion: '29 años' },
  { id: 16, nombre: 'Isabel', descripcion: '31 años' },
  { id: 17, nombre: 'Fernando', descripcion: '32 años' },
  { id: 18, nombre: 'Lucía', descripcion: '33 años' },
  { id: 19, nombre: 'Diego', descripcion: '34 años' },
  { id: 20, nombre: 'Patricia', descripcion: '35 años' }
];


class App extends React.Component{
  state = {
    data: data,
    Form: {
      id: '',
      nombre: '',
      descripcion: ''
    },
    modalInsertar: false,
    modalEditar: false,
  };

  handleChange = e => {
    this.setState({
    Form: {
     ...this.state.Form,
      [e.target.name]: e.target.value
    }
  })
  }
  
  mostrarModalInsertar = () => {
    this.setState({ modalInsertar: true });
  }

  ocultarModalEditar = () => {
    this.setState({ modalInsertar: false });
  }

  mostrarModalEditar = (registro) => {
    this.setState({ modalEditar: true, Form: registro});
  }

  ocultarModalInsertar = () => {
    this.setState({ modalEditar: false });
  }



  insertar = () => {
    var valorNuevo = { ...this.state.Form };
    valorNuevo.id = this.state.data.length + 1;
    var lista = this.state.data;
    lista.push(valorNuevo);
    this.setState({ data: lista, modalInsertar: false });
  }

  editar = (dato) => {
    var contador = 0;
    var lista = this.state.data;
    lista.map((registro) => {
      if (dato.id == registro.id) {
        lista[contador].nombre = dato.nombre;
        lista[contador].descripcion = dato.descripcion;
      }
      contador++;
    });
    this.setState({ data: lista, modalEditar: false });
    

      
  }



  eliminar = (dato) => {
    var opcion =window.confirm("Deseas eliminar este registro?" + dato.id);
    if (opcion) {
      var contador = 0;
      var lista = this.state.data;
      lista.map((registro) => {
        if (registro.id == dato.id) {
          lista.splice(contador, 1)
        }
        contador++;
      });
      this.setState({ data: lista });
    }
  }
  render() {
    return (
      <>
      <Container>
        <br/>
          <Button color="primary" onClick={()=>this.mostrarModalInsertar ()}>Inserte datos el usuario</Button>
          <br />
          
          <Table>
            <thead><tr><th>ID</th>
              <th>Nombre</th>
              <th>Descripcion</th>
              <th>Acciones</th>
            </tr></thead>
            <tbody>
              {
                this.state.data.map((elemento) => (
                  <tr>
                    <td>{elemento.id}</td>
                    <td>{elemento.nombre}</td>
                    <td>{elemento.descripcion}</td>
                    <td>
                      <Button color="primary" onClick={()=>this.mostrarModalEditar(elemento)}>Editar</Button>{"  "}
                      <Button color="danger" onClick={()=>this.eliminar(elemento)}>Eliminar</Button>
                    </td>
                  </tr>
                ))}
            </tbody>
        </Table>
      </Container>
        <Modal isOpen={this.state.modalInsertar}>
          <ModalHeader>
            <div><h3>Insertar registro</h3></div>
          </ModalHeader>

          <ModalBody>
            <FormGroup>
              <label>Id</label>
              <input className='form-control' readOnly type="text" value={this.state.data.length+1}/>
            </FormGroup>
            <FormGroup>
              <label>Nombre</label>
              <input className = "form-control" name="personaje" type="text" />
            </FormGroup>
            <FormGroup>
              <label>Descripcion</label>
              <input className = "form-control" name="descripcion" type="text" />
            </FormGroup>
            <ModalFooter>
              <Button color="primary" onClick={()=>this.insertar()}>Insertar</Button>
              <Button color="danger"onClick={()=>this.ocultarModalInsertar()}>Cancelar</Button>
            </ModalFooter>
          </ModalBody>
      </Modal>
        
        <Modal isOpen={this.state.modalEditar}>
          <ModalHeader>
            <div><h3>Editar registro</h3></div>
          </ModalHeader>
          <ModalBody>
            <FormGroup>
              <label>Id</label>
              <input className='form-control' readOnly type="text" value={this.state.Form.id}/>
            </FormGroup>
            <FormGroup>
              <label>Nombre</label>
              <input className = "form-control" name="nombre" type="text" onChange={this.handleChange} value={this.state.Form.nombre} />
            </FormGroup>
            <FormGroup>
              <label>Descripcion</label>
              <input className = "form-control" name="descripcion" type="text" onChange={this.handleChange} value={this.state.Form.descripcion} />
            </FormGroup>
            <ModalFooter>
              <Button color="primary" onClick={()=>this.editar(this.state.Form)}>Editar</Button>
              <Button color="danger" onClick={()=>this.ocultarModalEditar()}>Cancelar</Button>
            </ModalFooter>
          </ModalBody>
      </Modal>
    </>
    );
  }
}

export default App;



{/*function App() {
  const [terminoBusqueda, setTerminoBusqueda] = useState('');
  const [datosFiltrados, setDatosFiltrados] = useState([]);
  const [numeroRegistros, setNumeroRegistros] = useState(20);

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

  const actualizarDatosFiltrados = (nuevosDatos) => {
    setDatosFiltrados(nuevosDatos);
  }

  return (
    <div>
      <h1>Buscador de Datos</h1>
      <Select onNumeroRegistrosChange={handleNumeroRegistrosChange} />
      <Buscador onBuscar={buscarDatos} />
      {terminoBusqueda && <Tabla datosFiltrados={datosFiltrados} numeroRegistros={numeroRegistros} actualizarDatos={actualizarDatosFiltrados} />}
      {!terminoBusqueda && <Tabla datosFiltrados={Array} numeroRegistros={numeroRegistros} actualizarDatos={actualizarDatosFiltrados}/>}
      <Info registrosMostrados={Math.min(numeroRegistros, datosFiltrados.length)}totalRegistros={datosFiltrados.length} />
    </div>
  );
}*/}


