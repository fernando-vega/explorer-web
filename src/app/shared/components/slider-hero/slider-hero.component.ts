import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-slider-hero',
  templateUrl: './slider-hero.component.html',
  styleUrls: ['./slider-hero.component.scss']
})
export class SliderHeroComponent implements OnInit {

  imgs = [];

  carouselOptions = {
    margin: 25,
    nav: true,
    dots: false,
    navText: [`<div class='nav-btn prev-slide'></div>`, `<div class='nav-btn next-slide'></div>`],
    responsiveClass: true,
    animateOut: 'fadeOut',
    autoplay: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 1,
        loop: true
      },
      1500: {
        items: 1,
        loop: true
      }
    }
  };

  images = [
    {
      image: 'https://freakyjolly.com/demo/jquery/PreloadJS/images/2.jpg',
      page: '/nosotros'
    },
    {
      image: '../../../../assets/images/banners/banner-institutional-1.jpg',
      page: '/servicios'
    },
    {
      image: 'https://freakyjolly.com/demo/jquery/PreloadJS/images/1.jpg',
      page: '/nosotros'
    },
    {
      image: 'https://freakyjolly.com/demo/jquery/PreloadJS/images/5.jpg',
      page: '/nosotros'
    },
    {
      image: '../../../../assets/images/banners/banner-quienes-somos-1.png',
      page: '/historia'
    },
    {
      image: '../../../../assets/images/banners/banner-quienes-somos-1.png',
      page: '/quienes-somos'
    },
    {
      image: '../../../../assets/images/banners/banner-institutional-1.jpg',
      page: '/institucional'
    },
    {
      image: '../../../../assets/images/banners/banner-alquiler.jpg',
      page: '/alquiler'
    },
    {
      image: '../../../../assets/images/banners/banner-institutional-1.jpg',
      page: '/certificaciones'
    }
  ];

  constructor(private router: Router) {
    this.router.events.subscribe(events => {
      if (events instanceof NavigationEnd) {
        for (const image of this.images) {
          if (this.router.url === image.page) {
            this.imgs.push(image);
          }
        }
        console.log(this.imgs);
      }
      if (events instanceof NavigationStart) {
        this.imgs = [];
      }
    });
  }

  ngOnInit() {
    for (const image of this.images) {
      if (this.router.url === image.page) {
        this.imgs.push(image);
      }
    }
  }

}
