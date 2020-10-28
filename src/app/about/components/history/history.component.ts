import { Component, OnInit } from '@angular/core';
import { IPageModel } from '../../../core/models/IPage.model';
import { PagesService } from '../../../core/services/pages/pages.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

  historyModel: IPageModel;
  constructor(private pageServices: PagesService) { }

  ngOnInit() {
    this.pageServices.getDefaultPage('historia')
      .then((response) => {
        this.historyModel = response;
      });
  }

}
