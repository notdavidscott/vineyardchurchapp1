import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()


export class YtProvider {

  apiKey = "AIzaSyDk6LakhSxN8cmTX3CMupFXvYb5aCNP7-U";

  constructor(public http: Http) {
   
  }

  getPlaylistsForChannel(channel) {
    return this.http.get('https://www.googleapis.com/youtube/v3/playlists?key=' + this.apiKey +
  '&channelId=' + channel + '&part=snippet,id&maxResults=20')
  .map(res => {
    return res.json()['items'];
  })
  }

  getList(listId){
    return this.http.get('https://www.googleapis.com/youtube/v3/playlistItems?key=' + this.apiKey +
    '&cplaylistId=' + listId + '&part=snippet,id&maxResults=20')
    .map(res => {
      return res.json()['items'];
    })
  }
  
}
