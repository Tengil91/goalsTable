import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IGoals } from './igoals';

@Injectable({
  providedIn: 'root'
})
export class GoalsService {

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
  constructor() { }

  getGoals(){
    return new Observable<IGoals>(observer => {
      let rows = this.rows
      observer.next({goals: rows})
    })
    /* return this.rows; */
  }
}
