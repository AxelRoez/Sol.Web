import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TipoPago } from '../Models/Tipos_pagos';
import { appsettings } from '../Setting/appsetting';

@Injectable({
  providedIn: 'root'
})
export class TipoPagoService {
  private http = inject(HttpClient);
  private apiurl: string = appsettings.apiurl + "tipoPago";

  obtenerTipoPago(idTipoPago: number) {
    return this.http.get<TipoPago>(`${this.apiurl}/${idTipoPago}`);
  }
}
