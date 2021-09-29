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

  constructor(private activateRoute: ActivatedRoute, private agendaService: AgendaService, private router: Router, private alertController: AlertController) { }

  ngOnInit() {
    this.activateRoute.paramMap.subscribe(paramMap => {
      const id = paramMap.get('id');
      this.agenda = this.agendaService.getTarea(Number(id));
      console.log(this.agenda);
    });
  }

  async deleteTarea() {
    const alerta = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Eliminar tarea',
      message: '¿Estás seguro? Esta acción es irreversible.',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
        }, {
          text: 'Eliminar',
          handler: () => {
            this.agendaService.deleteTarea(this.agenda.id);
            this.router.navigate(["/agenda"]);
          }
        }
      ]
    });

    await alerta.present();
  }
}
