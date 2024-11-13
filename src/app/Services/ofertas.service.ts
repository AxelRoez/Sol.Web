import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Oferta } from '../Models/Ofertas';
import { appsettings } from '../Setting/appsetting';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class OfertaService {
  private baseURL="http://localhost:8080/Ofertas";
  constructor(private httpClient: HttpClient){}
  listaOfertaArrayList():Observable<Oferta[]>{
    return this.httpClient.get<Oferta[]>(`${this.baseURL}`);
  }
}
