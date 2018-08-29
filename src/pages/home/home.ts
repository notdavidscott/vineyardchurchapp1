import { Component } from '@angular/core';
import { NavController, ViewController, AlertController } from 'ionic-angular';
import { GivingPage } from '../giving/giving';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  slides = [
    {
      title: "Connect Groups",
      description: "We value relationships. Here at VCC we always have something going on. We meet all the time and also at various locations depending on what we are doing and who is with us when we are doing the activity planned",
      image: "../../assets/imgs/audience-blur-bokeh-976866.jpg",
    },
    {
      title: "Mercy Warehouse",
      description: "The Mercy Warehouse takes in donations of unwanted goods, clothing, and furniture. We then sort and store them in our 20,000 square-foot facility. Our thrift store is open for sales every day. We use the profits from those sales to purchase food for needy families both in our own area and abroad.",
      image: "../../assets/imgs/audio-disc-disk-164853.jpg", 
    },
    {
      title: "Join Us",
      description: "VCC is a vibrant church family. Our passion is to produce a culture that encourages our people to have repeated supernatural, life-changing encounters with the love and power of Jesus to save and heal. Come join us!",
      image: "../../assets/imgs/adults-bestfriends-bright-1194412.jpg",
      
    }
  ];

  constructor(public navCtrl: NavController, public view: ViewController) {

  }

 

  openGiving() {
    this.navCtrl.push(GivingPage);
  }

}
