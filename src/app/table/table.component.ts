import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { GoalsService } from '../goals.service';
import { IGoal } from "../igoals";
import { SelectionModel } from "@angular/cdk/collections";
import { MatDialog } from '@angular/material/dialog';
import { CreateGoalFormComponent } from '../create-goal-form/create-goal-form.component';
import { ISearchValue } from '../i-search-value';

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

  constructor(
    private goalsService: GoalsService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.goalsService.getGoals().subscribe(data => {
      console.log(data);
      if(data.goals){
        this.updateRows(data.goals);
      }
    });
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

  applyFilter(event: ISearchValue) {
    console.log(event)
    const filterValue = event.condition;
    this.goalDataSource.filter = filterValue.trim().toLowerCase();

    if (this.goalDataSource.paginator) {
      this.goalDataSource.paginator.firstPage();
    }
  }

  openGoalsDialog(){
    console.log("här börjar en ny branch");
    const dialogRef = this.dialog.open(CreateGoalFormComponent, {
      width: '500px',
      data: {
        title: "",
        url: "",
        prerequisiteUrl: "",
        fullfillments: 0
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result)
      if(result && result.title){
        this.goalsService.addGoal(result).subscribe(data => {
          if(data.goals){
            this.updateRows(data.goals);
          }
        });
      }
      console.log('The dialog was closed');
    });
  }

  updateRows(rows){
    this.rows = rows;
    this.goalDataSource = new MatTableDataSource(this.rows);
    this.goalDataSource.paginator = this.paginator;
    this.goalDataSource.sort = this.sort;
    this.selection.clear();
  }

  deleteRow(id){
    console.log(id);
    this.goalsService.removeGoal(id).subscribe(data => {
      if(data.goals){
        this.updateRows(data.goals);
      }
    })
  }

  deleteSelectedRows(){
    const ids = this.selection.selected.map(row => row.id);
    console.log(this.selection.selected);
    this.goalsService.removeGoals(ids).subscribe(data => {
      console.log(data);
      if(data.goals || Object.values(data).length === 0){
        this.updateRows(data.goals);
      }
    })
  }
}
