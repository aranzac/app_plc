import { Component, OnInit } from '@angular/core';
import { Producto } from '../compartido/producto';
import { Detalle } from '../compartido/detalle';

const PRODUCTO: Detalle[] = [{
  id: 1, nombre: 'Producto 1', precio: 300, imagen: '/assets/images/movil1.jpg', comentario: [{
    estrellas: 5,
    comentario: "Producto funciona perfectamente, envío perfecto",
    autor: "Juan García",
    fecha: "2017-10-16T12:32:23.126094Z"
  },
  {
    estrellas: 4,
    comentario: "Producto correcto, envío con retraso",
    autor: "Emilio Fernández",
    fecha: "2016-12-03T07:52:24.236094Z"
  }]
}];

const VPRODUCTOS: Producto[] = [
  {
    id: 1,
    nombre: 'Producto 1',
    precio: 300,
    imagen: '/assets/images/movil2.jpg'
  },
  {
    id: 1,
    nombre: 'Producto 2',
    precio: 400,
    imagen: '/assets/images/movil2.jpg'
  },
  {
    id: 1,
    nombre: 'Producto 3',
    precio: 500,
    imagen: '/assets/images/movil3.jpg'
  },
  {
    id: 1,
    nombre: 'Producto 4',
    precio: 600,
    imagen: '/assets/images/movil4.jpg'
  }
];


@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.scss']
})
export class DetalleProductoComponent implements OnInit {

  vDetalles: Detalle[] = PRODUCTO;
  vProductos: Producto[] = VPRODUCTOS;
  productoSeleccionado = this.vProductos[0];
  productoUno = this.vDetalles[0];

  constructor() { }

  ngOnInit() {
  }
}


