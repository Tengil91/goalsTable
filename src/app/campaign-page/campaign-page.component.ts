import { Component, OnInit } from '@angular/core';
import { CookieService } from '../services/cookie.service';
import { CampaignService } from '../services/campaign.service';

@Component({
  selector: 'app-campaign-page',
  templateUrl: './campaign-page.component.html',
  styleUrls: ['./campaign-page.component.scss']
})
export class CampaignPageComponent implements OnInit {
  public currentView;
  campaigns = [];

  constructor(
    private cookieService: CookieService,
    private campaignService: CampaignService
    ) { }

  ngOnInit() {
    this.currentView = this.cookieService.getStringValue('campaignsViewType');
    if (!this.currentView) {
      this.currentView = 'grid';
    }
    this.cookieService.set('campaignsViewType', this.currentView, 3, true);

    this.campaignService.getCampaigns().subscribe(data => {
      console.log(data);
      if(data.campaigns){
        this.campaigns = data.campaigns;
      }
    })
  }
  
  setCurrentView(currentView) {
    this.currentView = currentView;
    this.cookieService.set('campaignsViewType', currentView, 3, true);
  }

}
