import { ModalPage } from './../modal/modal.page';
import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(
    public modalController: ModalController,
  ) { }


  async presentHalfModal() {
    const modal = await this.modalController.create({
      component: ModalPage,
      componentProps: { value: 123 },
      cssClass: 'half-modal'
    });
    return await modal.present();
  }

}
