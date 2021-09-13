import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { FooterComponent } from './footer/footer.component';




@NgModule({
  declarations: [
    EncabezadoComponent,
    FooterComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    EncabezadoComponent
  ]
})
export class ComponentsModule { }
