import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AgendaService } from '../agenda.service';
import { Agenda } from '../agenda.models';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-lista-tareas',
  templateUrl: './lista-tareas.page.html',
  styleUrls: ['./lista-tareas.page.scss'],
})
export class ListaTareasPage implements OnInit {

  agenda: Agenda;
  listaTarea: any;

  constructor(private activateRoute: ActivatedRoute, private agendaService: AgendaService, private router: Router, private alertController: AlertController) { }

  ngOnInit() {
    this.agendaService.getTareas().subscribe(
      (res) => {
        console.log(res),
        this.listaTarea(res)},
      (err) => console.log(err)
    )

  }
}
