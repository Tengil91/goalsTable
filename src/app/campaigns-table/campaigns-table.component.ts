import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ICampaign } from '../interfaces/i-campaigns';
import { MatSort } from '@angular/material/sort';
import {animate, state, style, transition, trigger} from '@angular/animations';


@Component({
  selector: 'app-campaigns-table',
  templateUrl: './campaigns-table.component.html',
  styleUrls: ['./campaigns-table.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})
export class CampaignsTableComponent implements OnInit {

  columnTitles = [
    "title",
    "status",
    "views",
    "clickThroughs",
    "ctr",
    "conversions",
    "conversionRate",
    "dismissals",
    "ellipsis",
    "expand"
  ];

  campaignDataSource: MatTableDataSource<ICampaign>;
  expandedElement: ICampaign | null;

  @ViewChild(MatSort) sort: MatSort;

  allCampaigns = [];

  @Input() set campaigns(campaigns){
    this.allCampaigns = campaigns;
    this.allCampaigns.forEach(campaign => campaign.expanded = false);
    this.updateRows(this.allCampaigns);
  }
  constructor() { }

  ngOnInit() {
  }

  updateRows(campaigns){
    this.campaignDataSource = new MatTableDataSource(campaigns);
    this.campaignDataSource.sort = this.sort;
  }

  expandContent(id){
    console.log(id);
    this.allCampaigns.forEach(campaign => {
      if(campaign.id === id && campaign.expanded === false){
        campaign.expanded = true;
      } else {
        campaign.expanded = false;
      }
    });
    this.updateRows(this.allCampaigns);
  }

}
