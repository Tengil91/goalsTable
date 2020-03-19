import { Component, OnInit, Input } from '@angular/core';
import { ICampaigns } from '../interfaces/i-campaigns';

@Component({
  selector: 'app-campaigns-grid',
  templateUrl: './campaigns-grid.component.html',
  styleUrls: ['./campaigns-grid.component.scss']
})
export class CampaignsGridComponent implements OnInit {
  public activeCampaigns: Array<ICampaigns> = [];

  @Input() set campaigns(campaigns){
    this.activeCampaigns = campaigns;
  }
  constructor() { }

  ngOnInit() {
  }

}
