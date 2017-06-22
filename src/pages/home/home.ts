import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
// import { Page } from 'ionic-angular';

import { AboutPage } from '../about/about';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public name;
  public aboutPage = AboutPage;

  constructor(public navCtrl: NavController) {
    this.name = "Andrew";
  }

}
