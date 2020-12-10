import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.css']
})
export class ListViewComponent implements OnInit {

  fakeLists = [
    {"title":"knightcore aesthetic","description":"it's about the chivalry. and also i want a big sword to defeat my enemies hehe"},
    {"title":"scifi movies better than star wars","description":"which isn't really a high bar when you think about it"},
    {"title":"the epic highs and lows of superhero media","description":"yes i think dc sucks yes i'm correct"}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
