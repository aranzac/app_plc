import { Component, OnInit, Input } from '@angular/core';
import { PRODUCTOS } from '../compartido/productos';
import { Producto } from '../compartido/producto'
// const PRODUCTO = {
//   id: 1,
//   nombre: 'Producto 1',
//   precio: 300,
//   imagen: '/assets/images/movil1.jpg',
//   comentarios: [
//     {
//       estrellas: 5,
//       comentario: "Producto funciona perfectamente, envío perfecto",
//       autor: "Juan García",
//       fecha: "2017-10-16T12:32:23.126094Z"
//     },
//     {
//       estrellas: 4,
//       comentario: "Producto correcto, envío con retraso",
//       autor: "Emilio Fernández",
//       fecha: "2016-12-03T07:52:24.236094Z"
//     }
//   ]
// };

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.scss']
})
export class DetalleProductoComponent implements OnInit {

  productoSeleccionado = PRODUCTOS;
  @Input() producto: Producto;

  constructor() { }

  ngOnInit() {
  }

}
