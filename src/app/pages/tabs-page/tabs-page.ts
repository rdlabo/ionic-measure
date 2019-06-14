import { Component } from '@angular/core';
import {MenuController} from '@ionic/angular';

@Component({
  templateUrl: 'tabs-page.html'
})
export class TabsPage {
  constructor(
    private menu: MenuController,
  ) {}
  ionViewWillEnter() {
    this.menu.enable(true, 'primary').then(
      () => console.log('menu enable'),
    );
  }
}
