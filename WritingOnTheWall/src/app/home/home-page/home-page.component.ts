import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  showFilms: boolean = true;
  showBooks: boolean = false;
  showTv: boolean = false;

  favFilms = [
    {
      "title":"Dragonheart",
      "year":1996,
      "liked":562
    },
    {
      "title":"King Arthur",
      "year":2004,
      "liked":335
    },
    {
      "title":"The Lego Movie",
      "year":2015,
      "liked":256
    },
    {
      "title":"Into the Spiderverse",
      "year":2018,
      "liked":248
    },
    {
      "title":"Bumblebee",
      "year":2018,
      "liked":232
    }
  ];

  favTV = [
    {
      "title":"Avengers: Earth's Mightiest Heroes",
      "year": 2013,
      "network":"Marvel",
      "liked":456
    },
    {
      "title":"Cursed",
      "year": 2020,
      "network":"Netflix",
      "liked":431
    },
    {
      "title":"The 100",
      "year": 2013,
      "network":"The CW",
      "liked":362
    },
    {
      "title":"Arrow",
      "year": 2005,
      "network":"The CW",
      "liked":351
    },
    {
      "title":"The Flash",
      "year": 2010,
      "network":"The CW",
      "liked":254
    }
  ];

  favBooks = [
    {
      "title":"Webster's Dictionary",
      "year":2000,
      "author":"God",
      "liked":5665
    },
    {
      "title":"Lord of the Rings",
      "year":1900,
      "author":"JRR Tolkien",
      "liked":596
    },
    {
      "title":"The Hunger Games",
      "year":2010,
      "author":"Suzanne Collins",
      "liked":595
    },
    {
      "title":"Twilight",
      "year":2005,
      "author":"Stephanie Meyer",
      "liked":231
    },
    {
      "title":"New Moon",
      "year":2008,
      "author":"Stephanie Meyer",
      "liked":152
    }
  ];

  latestActivity = [
    {
      "amount":15,
      "title":"Dragonheart"
    },
    {
      "amount":-8,
      "title":"Harry Potter"
    },
    {
      "amount":-55,
      "title":"Supernatural"
    },
    {
      "amount":-12,
      "title":"Game of Thrones"
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  switchTabs(v1: boolean, v2: boolean, v3: boolean){
    this.showFilms = v1;
    this.showBooks = v2;
    this.showTv = v3;
  }

}
