import { Component } from '@angular/core';

@Component({
  selector: 'app-slide-customers',
  templateUrl: './slide-customers.component.html',
  styleUrls: ['./slide-customers.component.scss']
})
export class SlideCustomersComponent {

  carouselOptions = {
    margin: 15,
    nav: true,
    dots: false,
    navText: [`<div class='nav-btn prev-slide'></div>`, `<div class='nav-btn next-slide'></div>`],
    responsiveClass: true,
    animateOut: 'fadeOut',
    autoplay: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 4,
        loop: true
      },
      1500: {
        items: 5,
        loop: true
      }
    }
  };

  images = [
    {
      image: '../../../../assets/images/customers/logo-argos.png'
    },
    {
      image: '../../../../assets/images/customers/logo-emp.png'
    },
    {
      image: '../../../../assets/images/customers/logo-holcim.svg'
    },
    {
      image: '../../../../assets/images/customers/logo-indumil.jpg'
    },
    {
      image: '../../../../assets/images/customers/logo-pazderio.jpg'
    },
    {
      image: '../../../../assets/images/customers/logo-emp.png'
    },
    {
      image: '../../../../assets/images/customers/logo-holcim.svg'
    },
  ];
}
