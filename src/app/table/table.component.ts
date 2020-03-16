import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { GoalsService } from '../goals.service';
import { IGoals, IGoal } from "../igoals";
import { SelectionModel } from "@angular/cdk/collections";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  columnTitles = [
    "select",
    "title",
    "url",
    "prerequisiteUrl",
    "fullfillments",
    "ellipsis"
  ];
  rows = [];
  goalDataSource: MatTableDataSource<IGoal>;
  selection = new SelectionModel<IGoal>(true, []);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private goalsService: GoalsService) { }

  ngOnInit() {
    this.goalsService.getGoals().subscribe(data => {
      console.log(data);
      this.rows = data.goals;
    });
    this.goalDataSource = new MatTableDataSource(this.rows);
    this.goalDataSource.paginator = this.paginator;
    this.goalDataSource.sort = this.sort;
  }


  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.goalDataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.goalDataSource.data.forEach(row => this.selection.select(row));
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.goalDataSource.filter = filterValue.trim().toLowerCase();

    if (this.goalDataSource.paginator) {
      this.goalDataSource.paginator.firstPage();
    }
  }
}
