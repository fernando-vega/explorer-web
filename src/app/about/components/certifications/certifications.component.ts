import { Component, OnInit } from '@angular/core';
import { IPageModel } from '../../../core/models/IPage.model';
import { PagesService } from '../../../core/services/pages/pages.service';

@Component({
  selector: 'app-certifications',
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.scss']
})
export class CertificationsComponent implements OnInit {

  certificationModel: IPageModel;
  constructor(private pageServices: PagesService) { }

  ngOnInit() {
    this.pageServices.getDefaultPage('certificaciones')
      .then((response) => {
        this.certificationModel = response;
      });
  }

}
