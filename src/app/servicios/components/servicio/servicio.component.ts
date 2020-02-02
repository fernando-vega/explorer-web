import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { ServiciosService } from '../../../services/servicios/servicios.service';
import { ServiciosInterface } from '../../../models/servicios.model';

@Component({
  selector: 'app-servicio',
  templateUrl: './servicio.component.html',
  styleUrls: ['./servicio.component.scss']
})
export class ServicioComponent implements OnInit {

  servicio: ServiciosInterface;
  constructor(
    private route: ActivatedRoute,
    private serviciosService: ServiciosService
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      this.servicio = this.serviciosService.getServicio(id);
    });

  }

}
