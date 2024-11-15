import { Component, OnInit } from '@angular/core';
import { Categoria } from '../../../Models/Categoria';
import { Producto } from '../../../Models/Producto';
import { CategoriaService } from '../../../Services/categoria.service';
import { ProductoService } from '../../../Services/producto.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Proveedores } from '../../../Models/Proveedores';
import { ProveedoresService } from '../../../Services/proveedores.service';

@Component({
  selector: 'app-categoria',
  standalone: true,             
  templateUrl: './categoria.component.html',
  imports: [CommonModule, FormsModule],       
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {
  categorias: Categoria[] = [];
  proveedores: Proveedores[] = [];
  productos: Producto[] = [];
  filteredCategorias: Categoria[] = [];
  filteredProducts: Producto[] = [];
  searchText: string = '';
  selectedCategory: Categoria | null = null;

  constructor(
    private categoriaService: CategoriaService,
    private proveedoresService: ProveedoresService,
    private productoService: ProductoService
  ) {}

  ngOnInit(): void {
    this.listaCategoria();
    this.listaProveedores();
    this.listaProductos();
  }

  private listaCategoria(): void {
    this.categoriaService.listaCategoriaArrayList().subscribe(data => {
      this.categorias = data;
      this.filteredCategorias = data;
    });
  }

  private listaProveedores(): void {
    this.proveedoresService.listaProveedoresArrayList().subscribe(data => {
      this.proveedores = data;
    });
  }

  private listaProductos(): void {
    this.productoService.listaProductoArrayList().subscribe(data => {
      this.productos = data;
      this.filteredProducts = data;
    });
  }

  // Método para filtrar productos por nombre
  // Método para filtrar productos por nombre
filterProducts(): void {
  let filtered = this.productos;

  // Verifica si `selectedCategory` no es `null` antes de filtrar
  if (this.selectedCategory?.id_categoria) {
    filtered = filtered.filter(producto => 
      producto.categoria.id_categoria === this.selectedCategory!.id_categoria
    );
  }

  // Filtrar productos por el texto de búsqueda
  if (this.searchText.trim() !== '') {
    filtered = filtered.filter(producto => 
      producto.nombre_prod.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

  this.filteredProducts = filtered;
}


  // Método para alternar el filtro de categoría
  filterByCategory(categoria: Categoria): void {
    if (this.selectedCategory && this.selectedCategory.id_categoria === categoria.id_categoria) {
      // Si ya está seleccionada la misma categoría, deseleccionar y mostrar todos
      this.selectedCategory = null;
    } else {
      // Seleccionar nueva categoría
      this.selectedCategory = categoria;
    }
    this.filterProducts();
  }
}
