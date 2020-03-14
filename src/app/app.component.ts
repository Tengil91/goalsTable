import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'goalsTable';

  columnTitles = [
    "Title",
    "Url",
    "Prerequisite Url",
    "Fullfillments"
  ];

  columnDataNames = [
    "title",
    "url",
    "prerequisticUrl",
    "fullfillments"
  ];
  
  rows = [
    {
      title: "My first awsome goal",
      url: "/contact-us",
      prerequisticUrl: null,
      fullfillments: 320
    },
    {
      title: "Sombody elso",
      url: "/product-1",
      prerequisticUrl: "/about-product-1",
      fullfillments: 160
    },
    {
      title: "Important goal",
      url: null,
      prerequisticUrl: null,
      fullfillments: 123
    },
    {
      title: "Important goal",
      url: null,
      prerequisticUrl: null,
      fullfillments: 123
    },
    {
      title: "Important goal",
      url: null,
      prerequisticUrl: null,
      fullfillments: 123
    },
    {
      title: "Important goal",
      url: null,
      prerequisticUrl: null,
      fullfillments: 123
    },
    {
      title: "Important goal",
      url: null,
      prerequisticUrl: null,
      fullfillments: 123
    },
    {
      title: "Important goal",
      url: null,
      prerequisticUrl: null,
      fullfillments: 123
    },
    {
      title: "Important goal",
      url: null,
      prerequisticUrl: null,
      fullfillments: 123
    },
    {
      title: "Important goal",
      url: null,
      prerequisticUrl: null,
      fullfillments: 123
    },
    {
      title: "Important goal",
      url: null,
      prerequisticUrl: null,
      fullfillments: 123
    },
  ];
}
