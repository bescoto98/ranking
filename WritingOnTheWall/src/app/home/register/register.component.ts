import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  index: number = 1;

  constructor() { }

  ngOnInit(): void {
  }

  moveOn(){
    this.index++;
  }

}
