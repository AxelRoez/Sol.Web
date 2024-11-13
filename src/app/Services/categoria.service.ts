import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Categoria } from '../Models/Categoria';
import { appsettings } from '../Setting/appsetting';
@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  private baseURL="http://localhost:8080/Categorias";
  constructor(private httpClient: HttpClient){}
  listaCategoriaArrayList():Observable<Categoria[]>{
    return this.httpClient.get<Categoria[]>(`${this.baseURL}`);
  }
}
