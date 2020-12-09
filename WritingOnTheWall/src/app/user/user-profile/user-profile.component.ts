import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  showList: boolean = false;
  listButton: string = "Expand list";

  reviews = [
      { "media":"Harry Potter" , "opinion":"this sucked", "agree":54, "disagree":2 },
      { "media":"Twilight", "opinion":"effervescent", "agree":5, "disagree":3 }
  ];

  topten = [
    {"media":"Dragonheart", "opinion":"invented romance as we know it"},
    {"media":"High School Musical", "opinion":"full of absolute bangers"},
    {"media":"Last Knights","opinion":"clive owen looking sexy"},
    {"media":"Tron: Legacy","opinion":"daft punk killing it for two hours straight"},
    {"media":"The 100","opinion":"its so bad that it has unfortunately become good"},
    {"media":"Power Rangers: Mystic Force","opinion":"formative experience"},
    {"media":"Nimona","opinion":"gay people <3"},
    {"media":"Revenge of the Sith novelization","opinion":"also a formative experience"},
    {"media":"Pacific Rim","opinion":"the only good thing del toro has made"},
    {"media":"The Song of Achilles","opinion":"the greeks would hate this which makes it even better"}
  ];

  fakeLists = [
    {"title":"knightcore aesthetic","description":"it's about the chivalry. and also i want a big sword to defeat my enemies hehe"},
    {"title":"scifi movies better than star wars","description":"which isn't really a high bar when you think about it"},
    {"title":"the epic highs and lows of superhero media","description":"yes i think dc sucks yes i'm correct"}
  ];
  constructor() { }

  ngOnInit(): void {
  }

  toggleList(){
    this.showList = !this.showList;

    if(this.showList){
      this.listButton = "Collapse list";
    }
    else{
      this.listButton = "Expand list";
    }
  }

}
