import React from "react";
import { observer } from "mobx-react";
import TiendaController from "./TiendaController";

class Pedidos extends React.Component {
  actualizarCantidad(event) {
    this.props.hacerPedido(this.props.indice, event.target.value);
  }

  render() {
    const platillosPedidos = [];
    const bebidasPedidos = [];

    TiendaController.platillos.forEach((value, index) => {
      if (value.cantidad !== 0) {
        platillosPedidos.push(
          <div className="list-group-item" key={index}>
            <div className="panel-body">
              <h4>{value.nombre}</h4>
              <div className="APrecioCantidad">
                <span>
                  Cantidad:
                  {value.cantidad}
                </span>
                <span className="PrecioPlatillo">
                  Precio: {value.cantidad * value.precio}
                </span>
              </div>
            </div>
          </div>
        );
      }
    });
    TiendaController.bebidas.forEach((value, index) => {
      if (value.cantidad !== 0) {
        bebidasPedidos.push(
          <div className="list-group-item" key={index}>
            <div className="panel-body">
              <h4>{value.nombre}</h4>
              <div className="APrecioCantidad">
                <span>
                  Cantidad:
                  {value.cantidad}
                </span>
                <span className="PrecioPlatillo">
                  Precio: {value.cantidad * value.precio}
                </span>
              </div>
            </div>
          </div>
        );
      }
    });
    return (
      <div className="col-md-6">
        <div className="panel panel-primary">
          <div className="list-group Pedidos-Menu">
            {platillosPedidos}
            {bebidasPedidos}
          </div>
        </div>
      </div>
    );
  }
}

export default observer(Pedidos);
