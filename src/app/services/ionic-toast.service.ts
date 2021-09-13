import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class IonicToastService {

  private myToast: any;

  constructor(
    public toast: ToastController
  ) { }

  showToast() {
    this.myToast = this.toast.create({
      message: 'Construyéndose con ❤️ por el Grupo 2',
      duration: 2000
    }).then((toastData) => {
      console.log(toastData);
      toastData.present();
    });
  }
  hideToast() {
    this.myToast = this.toast.dismiss();
  }
}
