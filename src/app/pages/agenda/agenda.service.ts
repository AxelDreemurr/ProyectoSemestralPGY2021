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
      id: 1,
      titulo: 'Reunión con Carlos Empresario',
      imagen: 'https://scontent-scl2-1.xx.fbcdn.net/v/t1.6435-9/109348155_10219378565828884_4694513327998296403_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=84a396&_nc_ohc=NGnN8wAEmHwAX9iiiu0&_nc_ht=scontent-scl2-1.xx&oh=09bcf867977e9f6f0cf53f141cb896c0&oe=617D3A72',
      descripcion: 'Reunirse con Carlos Empresario para discutir cosas súper productivas'
    },
    {
      id: 2,
      titulo: 'Llevar al niño Alexis a la escuela',
      imagen: 'https://images-ext-1.discordapp.net/external/fKvm85E_zt8caw0ebs8soSAEf_qNXBvru3uJUph4XZg/%3F_nc_cat%3D109%26ccb%3D1-5%26_nc_sid%3Dcdbe9c%26_nc_eui2%3DAeF4qUhxoRJ-H3zMXtMLcnMkB_lAh4EU6OwH-UCHgRTo7PIz9bG5VAvja69S2Vz7aNlViZtwzTUpAjvSZRyArfRi%26_nc_ohc%3DNpGyzNR2YLYAX-F5pt1%26_nc_ht%3Dscontent.fscl21-1.fna%26oh%3D68b0603b5466a67eb35a5e579005cf50%26oe%3D617AB710/https/scontent.fscl21-1.fna.fbcdn.net/v/t1.18169-9/76806_173155462697767_7728257_n.jpg',
      descripcion: 'Llegar antes de las 8:00, no olvidar la cartulina'

    },
    {
      id: 3,
      titulo: 'No olvidar disfrutar la cangreburger',
      imagen: 'https://i.imgur.com/9u2Zoui.png',
      descripcion: 'Eso mismo.'
    },
    {
      id: 4,
      titulo: 'Pasear al canino',
      imagen: 'https://i.imgur.com/f4uulG7.png',
      descripcion: '"Ya no queda en mis manos"'
    },
    {
      id: 5,
      titulo: '¿Pinky, qué haremos hoy?',
      imagen: 'https://i.imgur.com/z3DhizU.jpg',
      descripcion: '"Tratar de conquistar el Duoc entero"'
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
