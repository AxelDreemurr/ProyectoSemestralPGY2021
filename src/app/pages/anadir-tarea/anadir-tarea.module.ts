import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnadirTareaPageRoutingModule } from './anadir-tarea-routing.module';

import { AnadirTareaPage } from './anadir-tarea.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnadirTareaPageRoutingModule
  ],
  declarations: [AnadirTareaPage]
})
export class AnadirTareaPageModule {}
