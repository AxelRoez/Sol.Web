import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { appsettings } from '../Setting/appsetting';
import { Observable } from 'rxjs';
import { Proveedores } from '../Models/Proveedores';

@Injectable({
  providedIn: 'root'
})
export class ProveedoresService {
  private baseURL="http://localhost:8080/Proveedores";
  constructor(private httpClient: HttpClient){}
  listaProveedoresArrayList():Observable<Proveedores[]>{
    return this.httpClient.get<Proveedores[]>(`${this.baseURL}`);
  }
}
