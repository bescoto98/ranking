import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-global-list',
  templateUrl: './global-list.component.html',
  styleUrls: ['./global-list.component.css']
})
export class GlobalListComponent implements OnInit {

  showTop: boolean = true;
  showRecent: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  switchTabs(){
    this.showTop = !this.showTop;
    this.showRecent = !this.showRecent;

  }
}
