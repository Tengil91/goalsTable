import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { GoalsTableComponent } from './goals-table/goals-table.component';
import { SearchInputComponent } from './search-input/search-input.component';
import { TableComponent } from './table/table.component';
import { MatSortModule } from '@angular/material/sort';
import { CreateGoalFormComponent } from './create-goal-form/create-goal-form.component';
import { SectionHeaderComponent } from "./section-header/section-header.component";
import { ExpandableTableExampleComponent } from './expandable-table-example/expandable-table-example.component';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { CampaignPageComponent } from './campaign-page/campaign-page.component';
import { CampaignsTableComponent } from './campaigns-table/campaigns-table.component';
import { CampaignsGridComponent } from './campaigns-grid/campaigns-grid.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatChipsModule } from '@angular/material/chips';




@NgModule({
  declarations: [
    AppComponent,
    GoalsTableComponent,
    SearchInputComponent,
    TableComponent,
    CreateGoalFormComponent,
    SectionHeaderComponent,
    CampaignPageComponent,
    CampaignsTableComponent,
    CampaignsGridComponent,
    ExpandableTableExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSortModule,
    MatCheckboxModule,
    MatDialogModule,
    MatMenuModule,
    MatIconModule,
    MatCardModule,
    MatButtonToggleModule,
    MatChipsModule
  ],
  entryComponents: [
    CreateGoalFormComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
