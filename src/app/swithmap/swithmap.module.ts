import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SwithmapRoutingModule } from './swithmap-routing.module';
import { SwithmapComponent } from './swithmap.component';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggle } from '@angular/material/slide-toggle';
@NgModule({
  declarations: [SwithmapComponent ],
  imports: [
    CommonModule,
    SwithmapRoutingModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSlideToggleModule,
    ReactiveFormsModule,
    MatSelectModule,
  ], exports:
  [
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSlideToggleModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatSlideToggle
  ]
})
export class SwithmapModule { }
