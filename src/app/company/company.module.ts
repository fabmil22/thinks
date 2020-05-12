import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyRoutingModule } from './company-routing.module';
import { CompanyComponent } from './company.component';
import { ListCompaniesComponent } from './list-companies/list-companies.component';
import {MatTableModule} from '@angular/material/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatRadioModule } from '@angular/material/radio';
import { MatSlideToggleModule, MatSlideToggle } from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';

@NgModule({
  declarations: [CompanyComponent, ListCompaniesComponent],
  imports: [
    CommonModule,
    CompanyRoutingModule,
    MatTableModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSlideToggleModule,
    ReactiveFormsModule,
    MatSelectModule,


  ],
  exports: [
    MatTableModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSlideToggleModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatSlideToggle,
  ]
})
export class CompanyModule { }
