import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../Models/Usuarios';
import { appsettings } from '../Setting/appsetting';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private http = inject(HttpClient);
  private apiurl: string = appsettings.apiurl + "usuario";

  obtenerUsuario(idUsuario: number) {
    return this.http.get<Usuario>(`${this.apiurl}/${idUsuario}`);
  }
}
