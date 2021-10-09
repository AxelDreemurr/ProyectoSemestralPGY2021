import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AgendaService {

  constructor(private cliente: HttpClient) { }

  getTareas() {
    return this.cliente.get("http://localhost:1337/tareas");
  }

}
