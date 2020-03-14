import { Component, OnInit } from '@angular/core';
import { ServiciosService } from '../../../core/services/servicios/servicios.service';
import { ServiciosInterface } from '../../../core/models/servicios.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  status = false;
  servicios;

  constructor( private servicioService: ServiciosService ) { }

  ngOnInit() {
    this.servicios = this.servicioService.getAllServicios();
  }

  menu() {
    if (this.status) {
      this.status = false;
    } else {
      this.status = true;
    }
  }

}
