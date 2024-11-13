import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Comprobante } from '../Models/Comprobantes';
import { appsettings } from '../Setting/appsetting';

@Injectable({
  providedIn: 'root'
})
export class ComprobanteService {
  private http = inject(HttpClient);
  private apiurl: string = appsettings.apiurl + "comprobante";

  obtenerComprobante(idComprobante: number) {
    return this.http.get<Comprobante>(`${this.apiurl}/${idComprobante}`);
  }
}
