import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CertificationsComponent } from './components/certifications/certifications.component';
import { CertificationsRoutingModule } from './certifications-routing.module';

import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    CertificationsComponent
  ],
  imports: [
    CommonModule,
    CertificationsRoutingModule,
    SharedModule
  ]
})
export class CertificationsModule { }
