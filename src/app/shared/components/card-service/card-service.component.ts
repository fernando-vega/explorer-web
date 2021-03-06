import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../../../core/services/servicios/services.service';

@Component({
  selector: 'app-card-service',
  templateUrl: './card-service.component.html',
  styleUrls: ['./card-service.component.scss'],
})
export class CardServiceComponent implements OnInit {

  servicios;

  constructor(private servicioService: ServicesService) {
  }

  carouselOptions = {
    margin: 5,
    nav: true,
    dots: false,
    navText: [`<div class='nav-btn prev-slide'></div>`, `<div class='nav-btn next-slide'></div>`],
    responsiveClass: true,
    animateOut: 'fadeOut',
    autoplay: true,
    responsive: {
      0: {
        items: 1,
        nav: true,
      },
      600: {
        items: 2,
        nav: true,
      },
      1000: {
        items: 3,
        nav: true,
        loop: true,
      },
      1500: {
        items: 3,
        nav: true,
        loop: true,
      },
    },
  };

  ngOnInit() {
    this.servicioService.getAllServices()
      .then((response: any[]) => {
        this.servicios = [];
        response.forEach(async (service) => {
          this.servicios.push(await this.servicioService.getServiceWordPressToModel(service));
        });
      });
  }

}
