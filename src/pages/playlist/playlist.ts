import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { Observable } from 'rxjs/observable';
import { YtProvider } from '../../providers/yt/yt';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';

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

  constructor(public navCtrl: NavController, private plt: Platform, private youtube: YoutubeVideoPlayer, public navParams: NavParams, private ytProvider: YtProvider) {
    let listId = this.navParams.get('id');
    this.videos = this.ytProvider.getListVideos(listId);
    this.videos.subscribe(data => {
      console.log('video data', data);
    })
  }

  openVideo(video){
    if (this.plt.is('cordova')) {
      this.youtube.openVideo(video.snippet.resourceId.videoId)
    } else {
      window.open('https://www.youtube.com/watch?v=' + video.snippet.resourceId.videoId);
    }
    }

    
  ionViewDidLoad() {
    console.log('ionViewDidLoad PlaylistPage');
  }

}
