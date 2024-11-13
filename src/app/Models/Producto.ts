import { Categoria } from "./Categoria";
import { Oferta } from "./Ofertas";
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
  oferta: Oferta;

  constructor(id_producto: number, nombre_prod: string, descripcion_prod: string, precio_prod: number, stock_prod: number, pro_url: string, categoria: Categoria, proveedor: Proveedores, oferta: Oferta) {
    this.id_producto = id_producto;
    this.nombre_prod = nombre_prod;
    this.descripcion_prod = descripcion_prod;
    this.precio_prod = precio_prod;
    this.stock_prod = stock_prod;
    this.pro_url = pro_url;
    this.categoria = categoria;
    this.proveedores = proveedor;
    this.oferta = oferta;
  }
}