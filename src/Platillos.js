import React from 'react'
import './Platillos.css'
import logo from './logo.svg'
import TiendaController from './TiendaController'
import Ordenar from './Ordenar'

class Platillos extends React.Component {
  render() {
    const platillosDiv = []
    TiendaController.platillos.forEach((value, index) => {
      platillosDiv.push(
        <div className="list-group-item" key={index}>
          <div className="panel-body">
            <img
              alt=""
              role="presentation"
              src={logo}
              className="ImagenPlatillo"
            />
            <h2 className="TitlePlatillo">{value.nombre}</h2>
            <div className="DescripcionPlatillo">{value.descripcion}</div>
            <Ordenar
              precio={value.precio}
              indice={index}
              hacerPedido={(indice, evento) => {
                TiendaController.ponerOrden(indice, evento)
              }}
            />
          </div>
        </div>
      )
    })

    return (
      <div className="panel panel-primary">
        <div className="list-group Platillo-Menu">{platillosDiv}</div>
      </div>
    )
  }
}

export default Platillos
