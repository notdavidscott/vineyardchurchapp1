import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, ViewController } from 'ionic-angular';
import { Observable } from 'rxjs/observable';
import { YtProvider } from '../../providers/yt/yt';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';
import { VideoviewPage } from '../videoview/videoview';
import { LoadingController } from 'ionic-angular';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';



@IonicPage()
@Component({
  selector: 'page-playlist',
  templateUrl: 'playlist.html',
})
export class PlaylistPage {
  options : InAppBrowserOptions = {
    location : 'yes',//Or 'no' 
    hidden : 'no', //Or  'yes'
    clearcache : 'yes',
    clearsessioncache : 'yes',
    hardwareback : 'yes',
    mediaPlaybackRequiresUserAction : 'no',
    shouldPauseOnSuspend : 'no', //Android only 
    closebuttoncaption : 'Close', //iOS only
    disallowoverscroll : 'no', //iOS only 
    toolbar : 'yes', //iOS only 
    enableViewportScale : 'no', //iOS only 
    allowInlineMediaPlayback : 'no',//iOS only 
    presentationstyle : 'pagesheet',//iOS only 
    fullscreen : 'yes',//Windows only    
};
  videos: Observable<any[]>;
 

  constructor(private iab: InAppBrowser, public navCtrl: NavController, public loadingCtrl: LoadingController, public view: ViewController, private plt: Platform, private youtube: YoutubeVideoPlayer, public navParams: NavParams, private ytProvider: YtProvider) {
  
    let listId = this.navParams.get('id');
    this.videos = this.ytProvider.getListVideos(listId);
    this.videos.subscribe(data => {
      console.log('video data', data);
    })

    

  }
  public openVideo(video){
    var link = 'https://www.youtube.com/watch?v=';
    let target = "_system";
    // if (this.plt.is('cordova')) {
    // this.youtube.openVideo(video.snippet.resourceId.videoId)
    // } else {
     this.iab.create(link + video.snippet.resourceId.videoId,target,this.options);
     
    }
  //}
  // openVideo(video){
  //   this.navCtrl.push(VideoviewPage, {video: video});
  //     //window.open('https://www.youtube.com/watch?v=' + video.snippet.resourceId.videoId);
    
  //   }

  ionViewDidLoad() {
    this.presentLoading();
  }
  presentLoading() {
    const loader = this.loadingCtrl.create({
      content: "Loading videos...",
      duration: 1000
    });
    loader.present();
  }
  close(){
    this.view.dismiss();
  }

}
