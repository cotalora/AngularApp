import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {
  users: any = '';
  name: string;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getUsers().subscribe(data => {
      this.users = data;
    });
  }

  getUsers() {
    return this.http.get<any>('https://jsonplaceholder.typicode.com/users');
  }

  search() {
    if (this.name != '' && this.name != undefined) {
      console.log("IF");
      this.getUsers().subscribe(data => {
        this.users = data.filter(boat => boat.name == this.name);
      });
    }
    else {
      console.log("ELSE");
      this.getUsers().subscribe(data => {
        this.users = data;
      });
    }
  }

}
