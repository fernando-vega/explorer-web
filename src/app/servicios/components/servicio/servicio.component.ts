import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { ServiciosService } from '../../../core/services/servicios/servicios.service';
import { NormalizedUrlService } from '../../../core/services/normalizedUrl/normalized-url.service';

@Component({
  selector: 'app-servicio',
  templateUrl: './servicio.component.html',
  styleUrls: ['./servicio.component.scss']
})
export class ServicioComponent implements OnInit {

  servicio;
  constructor(
    private route: ActivatedRoute,
    private serviciosService: ServiciosService,
    private normalizeUrl: NormalizedUrlService
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      const title = this.normalizeUrl.normalizedUrl(params.title);
      this.servicio = this.serviciosService.getServicio(title);
    });
  }

}
