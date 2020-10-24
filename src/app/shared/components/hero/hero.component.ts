import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/core/services/servicios/services.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent implements OnInit {

  public carouselOptions = {
    margin: 25,
    nav: false,
    dots: false,
    navText: [`<div class='nav-btn prev-slide'></div>`, `<div class='nav-btn next-slide'></div>`],
    responsiveClass: true,
    animateOut: 'fadeOut',
    autoplay: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 1,
        nav: false,
      },
      1000: {
        items: 1,
        nav: false,
        loop: true,
      },
      1500: {
        items: 1,
        nav: false,
        loop: true,
      },
    },
  };

  public services;

  constructor(
    private servicesService: ServicesService,
  ) {
  }

  ngOnInit() {
    this.servicesService.getAllServices()
      .then((response: any[]) => {
        this.services = [];
        response.forEach(async (service) => {
          this.services.push(await this.servicesService.getServiceWordPressToModel(service));
        });
      });
  }
}
