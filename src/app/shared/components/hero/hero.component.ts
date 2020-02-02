import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {

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

  images = [
    {
      text: 'Reparación y mantenimiento',
      image: 'https://freakyjolly.com/demo/jquery/PreloadJS/images/2.jpg',
      icon: '../../../../assets/images/icons/icon-hand-white.svg',
      link: '#'
    },
    {
      text: 'Asesoría para adquisición de equipos',
      image: 'https://freakyjolly.com/demo/jquery/PreloadJS/images/3.jpg',
      icon: '../../../../assets/images/icons/icon-gear-white.svg',
      link: '#'
    },
    {
      text: 'Alquiler para atención de contingencias',
      image: 'https://freakyjolly.com/demo/jquery/PreloadJS/images/1.jpg',
      icon: '../../../../assets/images/icons/icon-warning-machine-white.svg',
      link: '#'
    },
    {
      text: 'Servicio técnico en campo',
      image: 'https://freakyjolly.com/demo/jquery/PreloadJS/images/4.jpg',
      icon: '../../../../assets/images/icons/icon-location-servic-white.svg',
      link: '#'
    },
    {
      text: 'Motores',
      image: 'https://freakyjolly.com/demo/jquery/PreloadJS/images/5.jpg',
      icon: '../../../../assets/images/icons/icon-motor-white.svg',
      link: '#'
    },
    {
      text: 'Capacitaciones',
      image: 'https://freakyjolly.com/demo/jquery/PreloadJS/images/7.jpg',
      icon: '../../../../assets/images/icons/icon-training-white.svg',
      link: '#'
    }
  ];
}
