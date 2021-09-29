/* eslint-disable @typescript-eslint/member-ordering */
import { Component, OnInit } from '@angular/core';
import { AgendaService } from './agenda.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.page.html',
  styleUrls: ['./agenda.page.scss'],
})
export class AgendaPage implements OnInit {

  titulo = 'Lista de Tareas';

  listaTarea = []
  constructor(private agendaService: AgendaService, private router: Router) { }

  ngOnInit() {
    this.listaTarea = this.agendaService.getTareas()
  }

  ionViewWillEnter() {
    this.listaTarea = this.agendaService.getTareas()
  }

  addTarea() {
    this.router.navigate(['/anadir-tarea']);
  }
}
