import { Component } from '@angular/core';
import { NavController, ViewController, AlertController } from 'ionic-angular';
import { GivingPage } from '../giving/giving';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 

  constructor(public navCtrl: NavController, public view: ViewController) {

  }

 

  openGiving() {
    this.navCtrl.push(GivingPage);
  }

}
