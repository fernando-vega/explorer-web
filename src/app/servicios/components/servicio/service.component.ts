import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { ServicesService } from '../../../core/services/servicios/services.service';
import { NormalizedUrlService } from '../../../core/services/normalizedUrl/normalized-url.service';
import { IService } from '../../../core/models/IService';

@Component({
  selector: 'app-servicio',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {

  service;
  private title: string;
  constructor(
    private route: ActivatedRoute,
    private servicesService: ServicesService,
    private normalizeUrl: NormalizedUrlService
  ) {
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.title = this.normalizeUrl.normalizedUrl(params.title);
      this.getService(this.title);
    });
  }

  private getService(title: string): void {
    this.servicesService.getService(title)
      .then((service: IService) => {
        this.service = service;
      });
  }



}
