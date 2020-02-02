import { Component, OnInit } from '@angular/core';
import { ServiciosService } from '../../../services/servicios/servicios.service';
import { ServiciosInterface } from '../../../models/servicios.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  status = false;
  servicios: any;

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
