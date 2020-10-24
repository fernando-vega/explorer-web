import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../../../core/services/servicios/services.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  status = false;
  services;

  constructor(private servicioService: ServicesService) {
  }

  ngOnInit() {
    this.servicioService.getAllServices()
      .then((response: any[]) => {
        this.services = [];
        response.forEach(async (service) => {
          this.services.push(await this.servicioService.getServiceWordPressToModel(service));
        });
      });
  }

  menu() {
    this.status = !this.status;
  }

}
