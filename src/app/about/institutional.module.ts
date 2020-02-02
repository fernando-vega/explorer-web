import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstitutionalComponent } from './components/institutional/institutional.component';
import {InstitutionalRoutingModule } from './institutional-routing.module';

import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    InstitutionalComponent
  ],
  imports: [
    CommonModule,
    InstitutionalRoutingModule,
    SharedModule
  ]
})
export class InstitutionalModule { }
