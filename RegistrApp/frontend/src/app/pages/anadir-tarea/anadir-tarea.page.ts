import { Component, OnInit } from '@angular/core';
import { AgendaService } from '../agenda/agenda.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-anadir-tarea',
  templateUrl: './anadir-tarea.page.html',
  styleUrls: ['./anadir-tarea.page.scss'],
})
export class AnadirTareaPage implements OnInit {

  constructor(private agendaService: AgendaService, private router: Router) { }

  ngOnInit() {
  }

  

}
