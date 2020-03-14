import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface GoalData {
  title: string;
  url: string;
  prerequisticUrl: string;
  fullfillments: number;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  columnTitles = [
    "title",
    "url",
    "prerequisiteUrl",
    "fullfillments"
  ];
  columnTitles2 = [
    "Title2",
    "Url2",
    "Prerequisite Url2",
    "Fullfillments2"
  ];
  sortedData = [];
  goalDataSource: MatTableDataSource<GoalData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() {
    const rows = [
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
    this.sortedData = rows;
    
    this.goalDataSource = new MatTableDataSource(rows);
  }

  ngOnInit() {
    this.goalDataSource.paginator = this.paginator;
    this.goalDataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.goalDataSource.filter = filterValue.trim().toLowerCase();

    if (this.goalDataSource.paginator) {
      this.goalDataSource.paginator.firstPage();
    }
  }
}
