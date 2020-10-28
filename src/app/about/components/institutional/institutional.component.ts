import { Component, OnInit } from '@angular/core';
import { IInstitutionalModel } from '../../../core/models/IInstitutional.model';
import { PagesService } from '../../../core/services/pages/pages.service';

@Component({
  selector: 'app-institutional',
  templateUrl: './institutional.component.html',
  styleUrls: ['./institutional.component.scss']
})
export class InstitutionalComponent implements OnInit {

  institutionalModel: IInstitutionalModel;
  constructor(private pageServices: PagesService) { }

  ngOnInit() {
    this.pageServices.getInstitutionalPage()
      .then((response) => {
        this.institutionalModel = response;
      });
  }

}
