import { Component, OnInit , Input } from '@angular/core';

@Component({
  selector: 'app-goals-table',
  templateUrl: './goals-table.component.html',
  styleUrls: ['./goals-table.component.scss']
})
export class GoalsTableComponent implements OnInit {
  @Input() columnTitles;
  @Input() columnDataNames;
  @Input() rows;
  searchText = "";

  constructor() { }

  ngOnInit() {
  }

}
