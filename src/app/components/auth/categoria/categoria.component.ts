import { Component, OnInit } from '@angular/core';
import { Categoria } from '../../../Models/Categoria';
import { Producto } from '../../../Models/Producto';
import { CategoriaService } from '../../../Services/categoria.service';
import { ProductoService } from '../../../Services/producto.service'; // Servicio para obtener productos
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Proveedores } from '../../../Models/Proveedores';
import { ProveedoresService } from '../../../Services/proveedores.service';

@Component({
  selector: 'app-categoria',
  standalone: true,             // Esto indica que es un componente standalone
  templateUrl: './categoria.component.html',
  imports: [CommonModule,FormsModule],       // Importa CommonModule aquí
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {
  categorias: Categoria[] = [];  // Array de categorías
  proveedores: Proveedores[] = [];           // Array de proveedores
  productos: Producto[] = [];    // Array de productos
  filteredProveedores: Proveedores[] = [];   // Proveedores filtrados
  filteredCategorias: Categoria[] = [];  // Categorías filtradas
  filteredProducts: Producto[] = [];     // Productos filtrados
  searchText: string = '';       // Texto de búsqueda

  constructor(
    private categoriaService: CategoriaService,
    private proveedoresService: ProveedoresService,
    private productoService: ProductoService
      
  ) {}

  ngOnInit(): void {
    this.listaCategoria();        // Obtener categorías al iniciar el componente
    this.listaProveedores();
    this.listaProductos();        // Obtener productos
    
  }

  // Método para obtener las categorías
  private listaCategoria(): void {
    this.categoriaService.listaCategoriaArrayList().subscribe(data => {
      this.categorias = data;
      this.filteredCategorias = data;  // Inicializamos las categorías filtradas
    });
  }

  private listaProveedores(): void {
    this.proveedoresService.listaProveedoresArrayList().subscribe(data => {
      this.proveedores = data;
      this.filteredProveedores = data;  // Inicializamos los proveedores filtrados
    });
  }
  

  // Método para obtener todos los productos
  private listaProductos(): void {
    this.productoService.listaProductoArrayList().subscribe(data => {
      this.productos = data;
      this.filteredProducts = data;  // Inicializamos los productos filtrados
    });
  }

  // Método para filtrar productos por nombre
  filterProducts(): void {
    if (this.searchText.trim() === '') {
      this.filteredProducts = this.productos;  // Si no hay texto de búsqueda, mostrar todos los productos
    } else {
      this.filteredProducts = this.productos.filter(producto =>
        producto.nombre_prod.toLowerCase().includes(this.searchText.toLowerCase())  // Filtrar por nombre
      );
    }
  }

  // Método para filtrar productos por categoría
  filterByCategory(categoria: Categoria): void {
    this.filteredProducts = this.productos.filter(producto =>
      producto.categoria.id_categoria === categoria.id_categoria  // Filtrar productos que pertenecen a la categoría seleccionada
    );
  }
}
