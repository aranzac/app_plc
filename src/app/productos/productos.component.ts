import { Component, OnInit } from '@angular/core';
import { Producto } from '../compartido/producto';

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
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {
  vProductos: Producto[] = VPRODUCTOS;
  // productoSeleccionado = this.vProductos[0];

  constructor() { }

  ngOnInit() { }
}
