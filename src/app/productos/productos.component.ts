import { Component, OnInit } from '@angular/core';
import { Producto } from '../compartido/producto';
// import { PRODUCTOS } from '../compartido/productos';

// Comentamos la linea anterior porque ya no vamos a necesitar el vector con los productos, lo vamos a obtener mediante el servicio creado

import { ProductoService } from '../services/producto.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})

export class ProductosComponent implements OnInit {

  vProductos: Producto[];
  // productoSeleccionado = this.vProductos[0];

  productoSeleccionado = null;

  // Creamos un obj de ese servicio, que nos proporciona el vector de productos
  constructor(private productosService: ProductoService) { }

  ngOnInit() {
    this.vProductos = this.productosService.getProductos();
  }

  onSeleccionado(producto: Producto) { this.productoSeleccionado = producto; }
}
