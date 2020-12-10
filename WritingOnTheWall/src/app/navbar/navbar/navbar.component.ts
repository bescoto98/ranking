import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  links = [
    { "display": true, "name":"Register", "location":"register", "value": 1},
    { "display": true, "name":"Login", "location":"login", "value": 2},
    { "display": true, "name":"Favorite Lists", "location":"lists", "value": 3},
    { "display": true, "name":"Rankings", "location":"rankings", "value": 4}
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateTo(goTo: number){

    switch(goTo){
      case 1:
        // this.router.navigate(['']);
        console.log("going to register");
        break;
      case 2:
        this.router.navigate(['user','example']);
        this.links[2].display = false;
        break;
      case 3:
        console.log("going to lists");
        break;
      case 4:
        console.log("going to rankings");
        break;
    }
  }
}
