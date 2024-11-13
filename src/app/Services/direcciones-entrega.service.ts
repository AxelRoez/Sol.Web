import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DireccionEntrega } from '../Models/Direcciones_entrega';
import { appsettings } from '../Setting/appsetting';

@Injectable({
  providedIn: 'root'
})
export class DireccionEntregaService {
  private http = inject(HttpClient);
  private apiurl: string = appsettings.apiurl + "direccionEntrega";

  obtenerDireccionEntrega(idDireccion: number) {
    return this.http.get<DireccionEntrega>(`${this.apiurl}/${idDireccion}`);
  }
}
