import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, ViewController } from 'ionic-angular';
import { Observable } from 'rxjs/observable';
import { YtProvider } from '../../providers/yt/yt';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';
import { VideoviewPage } from '../videoview/videoview';
import { LoadingController } from 'ionic-angular';

/**
 * Generated class for the PlaylistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-playlist',
  templateUrl: 'playlist.html',
})
export class PlaylistPage {
  videos: Observable<any[]>;
 

  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController, public view: ViewController, private plt: Platform, private youtube: YoutubeVideoPlayer, public navParams: NavParams, private ytProvider: YtProvider) {
  
    let listId = this.navParams.get('id');
    this.videos = this.ytProvider.getListVideos(listId);
    this.videos.subscribe(data => {
      console.log('video data', data);
    })

    

  }
  openVideo(video){
    var link = 'https://www.youtube.com/watch?v=';
    // if (this.plt.is('cordova')) {
    // this.youtube.openVideo(video.snippet.resourceId.videoId)
    // } else {
      window.open(link + video.snippet.resourceId.videoId + ", '_self', 'location=yes'");
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
