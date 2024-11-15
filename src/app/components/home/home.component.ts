import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Producto } from '../../Models/Producto';
import { ProductoService } from '../../Services/producto.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule], // Añadir CommonModule aquí
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  productosConDescuento: Producto[] = [];

  constructor(private productoService: ProductoService) {}

  ngOnInit() {
    this.productoService.listaProductoArrayList().subscribe((productos: Producto[]) => { // Especificamos el tipo de 'productos'
      this.productosConDescuento = productos.filter((producto: Producto) => producto.ofertas.estado === 'Activo'); // También especificamos el tipo de 'producto'
    });
  }
}
