import { Component } from '@angular/core';
import { NavController, ViewController, NavParams, AlertController } from 'ionic-angular';
import { Observable } from 'rxjs/observable';
import { YtProvider } from '../../providers/yt/yt';
import { PlaylistPage } from '../playlist/playlist';
import { LoadingController } from 'ionic-angular';


@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})


export class ListPage {
  channelId = 'UCE8O_7WtDlJKZCEtgDEdSew';
  playlists: Observable<any[]>;
  
 //built in list 
  selectedItem: any;
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;

  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController, public view: ViewController, public navParams: NavParams, private ytProvider: YtProvider, private alertController: AlertController) {
  }
  presentLoading() {
    const loader = this.loadingCtrl.create({
      content: "Loading playlists...",
      duration: 700
    });
    loader.present();
  }

  ionViewDidLoad(){
  this.presentLoading();
   this.searchPlaylist();
  
  }

  searchPlaylist(){
    this.playlists = this.ytProvider.getPlaylistsForChannel(this.channelId);
    this.playlists.subscribe(data => {
      console.log('data' + data);
    }, err => { 
      let alert= this.alertController.create({
        title: 'Error', 
        message: 'No Playlists found for that Channel',
        buttons: ['OK']
      }); 
      alert.present();
    });
  }
  openPlaylist(id){
    this.navCtrl.push(PlaylistPage, {id: id});
  } 

  
  
}
