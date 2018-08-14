import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AboutPage } from '../pages/about/about';
import { BulletinPage } from '../pages/bulletin/bulletin';
import { LocationPage } from '../pages/location/location';
import { WorshipPage } from '../pages/worship/worship';
import { GivingPage } from '../pages/giving/giving';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage, 
    AboutPage,
    BulletinPage,
    LocationPage,
    WorshipPage,
    GivingPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    AboutPage,
    BulletinPage,
    LocationPage,
    WorshipPage,
    GivingPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
