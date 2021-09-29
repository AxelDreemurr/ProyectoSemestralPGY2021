import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaTareasPageRoutingModule } from './lista-tareas-routing.module';

import { ListaTareasPage } from './lista-tareas.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaTareasPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ListaTareasPage]
})
export class ListaTareasPageModule {}
