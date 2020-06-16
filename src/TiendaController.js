import {extendObservable} from 'mobx'

class TiendaController {
  constructor() {
    extendObservable(this, {
      platillos: [
        {
          nombre: 'Arroz con pato',
          descripcion: 'platillo muy rico',
          precio: 100,
          cantidad: 0,
        },
        {
          nombre: 'Costillar de cordero',
          descripcion: 'platillo muy rico',
          precio: 150,
          cantidad: 0,
        },
        {
          nombre: 'Jalea mixta',
          descripcion: 'platillo muy rico',
          precio: 200,
          cantidad: 0,
        },
      ],
      bebidas: [
        {
          nombre: 'Cuba libre',
          descripcion: 'bebida muy rica',
          precio: 20,
          cantidad: 0,
        },
        {
          nombre: 'Mojito',
          descripcion: 'bebida muy rica',
          precio: 30,
          cantidad: 0,
        },
        {
          nombre: 'Limonada',
          descripcion: 'bebida muy rica',
          precio: 40,
          cantidad: 0,
        },
      ],
    })
  }

  ponerOrden(indice, cantidad) {
    this.platillos.forEach((element, index) => {
      if (indice === index) {
        this.platillos[index].cantidad = cantidad
      }
    })
  }

  bebidasEnLaOrden(indicePlatillo, cantidadPlatillo) {
    this.bebidas.forEach((value, index) => {
      if (indicePlatillo === index) {
        this.bebidas[index].cantidad = cantidadPlatillo
      }
    })
  }
}

export default new TiendaController()
