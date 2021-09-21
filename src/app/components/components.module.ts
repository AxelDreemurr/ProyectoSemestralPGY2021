import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { FooterComponent } from './footer/footer.component';
import { EncabezadologinComponent } from './encabezadologin/encabezadologin.component';
import { EncabezadoforgotComponent } from './encabezadoforgot/encabezadoforgot.component';




@NgModule({
  declarations: [
    EncabezadoComponent,
    FooterComponent,
    EncabezadologinComponent,
    EncabezadoforgotComponent,
    FooterComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    EncabezadoComponent,
    EncabezadologinComponent,
    EncabezadoforgotComponent,
    FooterComponent
  ]
})
export class ComponentsModule { }
