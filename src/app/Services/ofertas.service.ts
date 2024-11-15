import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ofertas } from '../Models/Ofertas';
import { appsettings } from '../Setting/appsetting';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class OfertaService {
  private baseURL="http://localhost:8080/Ofertas";
  constructor(private httpClient: HttpClient){}
  obtenerProductosConDescuento():Observable<Ofertas[]>{
    return this.httpClient.get<Ofertas[]>(`${this.baseURL}`);
  }
}
