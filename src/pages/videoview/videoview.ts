import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/observable';
import { YtProvider } from '../../providers/yt/yt';
@IonicPage()
@Component({
  selector: 'page-videoview',
  templateUrl: 'videoview.html',
})
export class VideoviewPage {

  video: Observable<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private ytProvider: YtProvider) {
    let videoId = this.navParams.get('id');
    this.video = this.ytProvider.getVideo(videoId);
    this.video.subscribe(data => {
      console.log('video data', data);
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VideoviewPage');
  }

}
