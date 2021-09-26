import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

  albumes: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getAlbums().subscribe(data => {
      this.albumes = data;
    });
  }

  getAlbums() {
    return this.http.get<any>('https://jsonplaceholder.typicode.com/albums/1/photos');
  }

}
