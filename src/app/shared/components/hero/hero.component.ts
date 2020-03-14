import { Component, OnInit } from '@angular/core';
import { ServiciosService } from 'src/app/core/services/servicios/servicios.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit{

  carouselOptions = {
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
        nav: false
      },
      600: {
        items: 1,
        nav: false
      },
      1000: {
        items: 1,
        nav: false,
        loop: true
      },
      1500: {
        items: 1,
        nav: false,
        loop: true
      }
    }
  };

  servicios;

  constructor(
    private serviciosService: ServiciosService
  ) {}

  ngOnInit() {
    this.servicios = this.serviciosService.getAllServicios();
  }
}
