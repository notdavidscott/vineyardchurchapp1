import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, Platform } from 'ionic-angular';
import { HttpModule, Http } from '@angular/http';

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
import { GivingBasePage } from '../pages/giving-base/giving-base';
import { MercyWarehousePage } from '../pages/mercy-warehouse/mercy-warehouse';
import { YtProvider } from '../providers/yt/yt';

import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';
import { PlaylistPage } from '../pages/playlist/playlist';
import { VideoviewPage } from '../pages/videoview/videoview';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { RequestsPage } from '../pages/requests/requests';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage, 
    AboutPage,
    BulletinPage,
    LocationPage,
    WorshipPage,
    GivingPage, 
    GivingBasePage, 
    MercyWarehousePage, 
    PlaylistPage,
    VideoviewPage,
    RequestsPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
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
    GivingPage, 
    GivingBasePage, 
    MercyWarehousePage, 
    PlaylistPage,
    VideoviewPage,
    RequestsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    InAppBrowser,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    YtProvider,
    YoutubeVideoPlayer,
    
  ]
})
export class AppModule {}
