import { Categoria } from "./Categoria";
import { Ofertas} from "./Ofertas";
import {Proveedores } from "./Proveedores";

export class Producto {
  id_producto: number;
  nombre_prod: string;
  descripcion_prod: string;
  precio_prod: number;
  stock_prod: number;
  pro_url: string;
  categoria: Categoria;
  proveedores: Proveedores;
  ofertas: Ofertas;

  constructor(id_producto: number, nombre_prod: string, descripcion_prod: string, precio_prod: number, stock_prod: number, pro_url: string, categoria: Categoria, proveedor: Proveedores, ofertas: Ofertas) {
    this.id_producto = id_producto;
    this.nombre_prod = nombre_prod;
    this.descripcion_prod = descripcion_prod;
    this.precio_prod = precio_prod;
    this.stock_prod = stock_prod;
    this.pro_url = pro_url;
    this.categoria = categoria;
    this.proveedores = proveedor;
    this.ofertas = ofertas;
  }
}