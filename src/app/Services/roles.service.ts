import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Rol } from '../Models/roles';
import { appsettings } from '../Setting/appsetting';

@Injectable({
  providedIn: 'root'
})
export class RolService {
  private http = inject(HttpClient);
  private apiurl: string = appsettings.apiurl + "roles";

  obtenerRol(idRol: number) {
    return this.http.get<Rol>(`${this.apiurl}/${idRol}`);
  }
}
