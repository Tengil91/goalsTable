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
      prerequisiteUrl: null,
      fullfillments: 320
    },
    {
      title: "Sombody elso",
      url: "/product-1",
      prerequisiteUrl: "/about-product-1",
      fullfillments: 160
    },
    {
      title: "Important goal",
      url: null,
      prerequisiteUrl: null,
      fullfillments: 123
    },
    {
      title: "Important goal",
      url: null,
      prerequisiteUrl: null,
      fullfillments: 123
    },
    {
      title: "Important goal",
      url: null,
      prerequisiteUrl: null,
      fullfillments: 123
    },
    {
      title: "Important goal",
      url: null,
      prerequisiteUrl: null,
      fullfillments: 123
    },
    {
      title: "Important goal",
      url: null,
      prerequisiteUrl: null,
      fullfillments: 123
    },
    {
      title: "Important goal",
      url: null,
      prerequisiteUrl: null,
      fullfillments: 123
    },
    {
      title: "Important goal",
      url: null,
      prerequisiteUrl: null,
      fullfillments: 123
    },
    {
      title: "Important goal",
      url: null,
      prerequisiteUrl: null,
      fullfillments: 123
    },
    {
      title: "Important goal",
      url: null,
      prerequisiteUrl: null,
      fullfillments: 123
    },
  ];
  constructor() { }

  getGoals(){
    return new Observable<IGoals>(observer => {
      let rows = this.rows;
      observer.next({goals: rows});
    });
  }

  addGoal(goal){
    this.rows.push(goal);
    console.log(this.rows)
    return new Observable<IGoals>(observer => {
      let rows = this.rows;
      observer.next({goals: rows});
    });
  }

}
