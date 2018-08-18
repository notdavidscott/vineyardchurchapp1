import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LocationPage } from '../pages/location/location';
import { AboutPage } from '../pages/about/about';
import { BulletinPage } from '../pages/bulletin/bulletin';
import { WorshipPage } from '../pages/worship/worship';
import { GivingBasePage } from '../pages/giving-base/giving-base';
import { MercyWarehousePage } from '../pages/mercy-warehouse/mercy-warehouse';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Vineyard Media', component: ListPage },
      { title: 'Vineyard Ministries', component: AboutPage },
      { title: 'Mercy Warehouse', component: MercyWarehousePage },
      { title: 'Events Calendar', component: BulletinPage},
      { title: 'Locations', component: LocationPage },
      { title: 'Giving', component: GivingBasePage },
      
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
