import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IGoals } from './igoals';

@Injectable({
  providedIn: 'root'
})
export class GoalsService {
  nextId = 11;

  rows = [
    {
      id: 0,
      title: "My first awsome goal",
      url: "/contact-us",
      prerequisiteUrl: null,
      fullfillments: 320
    },
    {
      id: 1,
      title: "Sombody elso",
      url: "/product-1",
      prerequisiteUrl: "/about-product-1",
      fullfillments: 160
    },
    {
      id: 2,
      title: "Important goal",
      url: null,
      prerequisiteUrl: null,
      fullfillments: 123
    },
    {
      id: 3,
      title: "Important goal",
      url: null,
      prerequisiteUrl: null,
      fullfillments: 123
    },
    {
      id: 4,
      title: "Important goal",
      url: null,
      prerequisiteUrl: null,
      fullfillments: 123
    },
    {
      id: 5,
      title: "Important goal",
      url: null,
      prerequisiteUrl: null,
      fullfillments: 123
    },
    {
      id: 6,
      title: "Important goal",
      url: null,
      prerequisiteUrl: null,
      fullfillments: 123
    },
    {
      id: 7,
      title: "Important goal",
      url: null,
      prerequisiteUrl: null,
      fullfillments: 123
    },
    {
      id: 8,
      title: "Important goal",
      url: null,
      prerequisiteUrl: null,
      fullfillments: 123
    },
    {
      id: 9,
      title: "Important goal",
      url: null,
      prerequisiteUrl: null,
      fullfillments: 123
    },
    {
      id: 10,
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
    goal.id = this.nextId;
    this.nextId++;
    this.rows.push(goal);
    console.log(this.rows)
    return new Observable<IGoals>(observer => {
      let rows = this.rows;
      observer.next({goals: rows});
    });
  }

  removeGoal(id){
    const index = this.rows.findIndex(row => row.id === id);
    this.rows.splice(index, 1);
    return new Observable<IGoals>(observer => {
      let rows = this.rows;
      observer.next({goals: rows});
    });
  }

  removeGoals(ids){
    console.log(ids)
    ids.forEach(id => {
      const index = this.rows.findIndex(row => row.id === id);
      this.rows.splice(index, 1);
    });
    console.log(this.rows)

    return new Observable<IGoals>(observer => {
      let rows = this.rows;
      observer.next({goals: rows});
    });
  }

}
