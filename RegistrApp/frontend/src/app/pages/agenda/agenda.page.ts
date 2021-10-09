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

  listaTarea: any = []

  constructor(private agendaService: AgendaService, private router: Router) { }

  ngOnInit() {
    this.agendaService.getTareas().subscribe(
      (res) => {
        console.log(res),
        this.listaTarea = res},
      (err) => console.log(err)
    )

      }
}
