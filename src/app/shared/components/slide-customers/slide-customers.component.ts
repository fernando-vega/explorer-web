import { Component, OnInit } from '@angular/core';
import { CustomersService } from '../../../core/services/customers/customers.service';

@Component({
  selector: 'app-slide-customers',
  templateUrl: './slide-customers.component.html',
  styleUrls: ['./slide-customers.component.scss']
})
export class SlideCustomersComponent implements OnInit {

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

  images;

  constructor(private customerService: CustomersService) {}

  ngOnInit() {
    this.customerService.getAllCustomers().then(customers => {
      this.images = [];
      customers.forEach(async (value) => {
       this.images.push(await this.customerService.getClientesWordPressToModel(value));
      });
    });
  }

}
