import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.css']
})
export class PublicationsComponent implements OnInit {

  alert: boolean = false;
  created: boolean = false;
  name: string = '';
  des: string = '';
  constructor() { }

  ngOnInit() {
  }

  setData() {
    if (this.name != '' && this.name != undefined) {
      this.alert = false;
      this.created = true;
    }
    else {
      this.alert = true;
      this.created = false;
    }
  }

}
