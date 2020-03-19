import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICampaigns } from '../interfaces/i-campaigns';

@Injectable({
  providedIn: 'root'
})
export class CampaignService {
  nextId = 5;
  campaigns = [
    {
      id: 0,
      title: "William Wallace",
      status: 'PUBLISHED',
      views: 4,
      clickThroughs: 12,
      ctr: 0,
      conversions: 2,
      conversionRate: 2,
      dismissals: 0,
      tags: [
        "AoE2",
        "Celts",
        "learning campaign"
      ]
    },
    {
      id: 1,
      title: "Joan of Arc",
      status: 'PUBLISHED',
      views: 4,
      clickThroughs: 12,
      ctr: 0,
      conversions: 2,
      conversionRate: 2,
      dismissals: 0,
      tags: [
        "AoE2",
        "Franks",
      ]
    },
    {
      id: 2,
      title: "Saladin",
      status: 'PUBLISHED',
      views: 4,
      clickThroughs: 12,
      ctr: 0,
      conversions: 2,
      conversionRate: 2,
      dismissals: 0,
      tags: [
        "AoE2",
        "Saracens",
      ]
    },
    {
      id: 3,
      title: "Genghis Khan",
      status: 'PUBLISHED',
      views: 4,
      clickThroughs: 12,
      ctr: 0,
      conversions: 2,
      conversionRate: 2,
      dismissals: 0,
      tags: [
        "AoE2",
        "Mongols",
      ]
    },
    {
      id: 4,
      title: "Barbarossa",
      status: 'PUBLISHED',
      views: 4,
      clickThroughs: 12,
      ctr: 0,
      conversions: 2,
      conversionRate: 2,
      dismissals: 0,
      tags: [
        "AoE2",
        "Teutons",
      ]
    },
  ]

  constructor() { }
  getCampaigns(){
    return new Observable<ICampaigns>(observer => {
      const campaigns = this.campaigns
      observer.next({ campaigns: campaigns });
    });
  }
}
