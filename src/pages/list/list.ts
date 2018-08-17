import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { Observable } from 'rxjs/observable';
import { YtProvider } from '../../providers/yt/yt';
import { PlaylistPage } from '../playlist/playlist';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, private ytProvider: YtProvider, private alertController: AlertController) {
    


    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    // Let's populate this page with some filler content for funzies
    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat', 'bluetooth', 'build'];

    this.items = [];
    
    for (let i = 1; i < 11; i++) {
      this.items.push({
        title: 'Message Title ' + i,
        note: 'Service Date ' + i,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }
  }
  

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(ListPage, {
      item: item
    });
    
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
