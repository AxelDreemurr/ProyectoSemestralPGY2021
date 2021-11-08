import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  API = "http://localhost:1337/usus"

  constructor(private cliente: HttpClient) {}

  leerUsuarios() {
    return this.cliente.get(this.API)
  }

}