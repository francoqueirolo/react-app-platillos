import React, { Component } from 'react';
import {Route, Link} from 'react-router-dom'
import Platillos from './Platillos';
import Pedidos from './Pedidos';
import Bebidas from './Bebidas';

class Lienzo extends Component {
  render() {
    console.log(this.props.location);
    console.log(this.props.match);
    console.log(this.props.history);
    return (
      <div className="container">
        <div className="jumbotron">
          <h2>Nombre de la tienda</h2>
        </div>
        <div>
          <div>
            <Link to="/platillos">Platillos</Link>
            <Link to="/bebidas">Bebidas</Link>
          </div>
          <div>
            <Route path="/platillos" component={Platillos} />
            <Route path="/bebidas" component={Bebidas} />
          </div>
        </div>
        <Pedidos />
      </div>
    );
  }
}

export default Lienzo;
