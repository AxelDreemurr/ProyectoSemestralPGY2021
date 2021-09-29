/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable arrow-body-style */
import { Injectable } from '@angular/core';
import { Agenda } from './agenda.models';

@Injectable({
  providedIn: 'root'
})
export class AgendaService {

  constructor() { }
  private listaTarea: Agenda[] = [
    {
      id:1,
      titulo: 'Encargo Inglés',
      imagen: '',
      descripcion: 'Entregar video hablando con vin diesel'
    },
    {
      id:2,
      titulo: 'Encargo QA',
      imagen: '',
      descripcion: 'Entregar tabla de trazabilidad'

    }
]

  getTareas() {
    return [...this.listaTarea];
  }

  getTarea(id: number) {
    return {
      ...this.listaTarea.find( titulo =>{
        return titulo.id === id;
      })
    };
  }

  addTarea(titulo: string, imagen: string, descripcion: string) {
    this.listaTarea.push({
      titulo,
      imagen,
      descripcion,
      id: this.listaTarea.length+1
    });
  }

  deleteTarea(id: number) {
    this.listaTarea = this.listaTarea.filter( titulo => {
      return titulo.id !== id;
    });
  }
}
