import React from 'react';

class Ordenar extends React.Component {
  actualizarCantidad = (event) => {
    this.props.hacerPedido(this.props.indice, event.target.value)
  }

  render() {
    return (
      <div className="">
        <br />
        <label>Cantidad: </label>
        <input onChange={this.actualizarCantidad} type="number" min="0" max="20" />
        <label className="EspacioPlatillo">
          Precio:
          {this.props.precio}
        </label>
      </div>
    );
  }
}

export default Ordenar;
