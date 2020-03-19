import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GoalsTableComponent } from './goals-table/goals-table.component';
import { CampaignPageComponent } from './campaign-page/campaign-page.component';
import { ExpandableTableExampleComponent } from './expandable-table-example/expandable-table-example.component';

const routes: Routes = [
  {
    path: "goals",
    component: GoalsTableComponent
  },
  {
    path: "campaigns",
    component: CampaignPageComponent
  },
  {
    path: "examples/expanding-table",
    component: ExpandableTableExampleComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
