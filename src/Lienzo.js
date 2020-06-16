import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
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
          <Link to="/platillos">
            <button renderAs="button" className="btn btn-primary m-1">
              <span>Platillos</span>
            </button>
          </Link>
          <Link to="/bebidas">
            <button renderAs="button" className="btn btn-warning m-1">
              <span>Bebidas</span>
            </button>
          </Link>
        </div>
        <div className="row">
          <div className="col-md-6">
            <Route path="/platillos" component={Platillos} />
            <Route path="/bebidas" component={Bebidas} />
          </div>
          <Pedidos />
        </div>
      </div>
    );
  }
}

export default Lienzo;
