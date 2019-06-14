import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  templateUrl: 'tabs-page.html'
})
export class TabsPage implements OnInit {
  constructor(
    private menu: MenuController,
  ) {}
  ngOnInit() {
    this.menu.enable(true, 'primary').then(
      () => console.log('menu enable'),
    );
  }
}
