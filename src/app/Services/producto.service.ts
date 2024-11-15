import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../Models/Producto';
import { appsettings } from '../Setting/appsetting';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  obtenerProductosConDescuento() {
    throw new Error('Method not implemented.');
  }
  private baseURL="http://localhost:8080/Productos";
  constructor(private httpClient: HttpClient){}
  listaProductoArrayList():Observable<Producto[]>{
    return this.httpClient.get<Producto[]>(`${this.baseURL}`);
  }
}
