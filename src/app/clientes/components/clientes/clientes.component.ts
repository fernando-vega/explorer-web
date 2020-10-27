import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { CustomersService } from '../../../core/services/customers/customers.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss'],
})
export class ClientesComponent implements OnInit {

  data = {
    name: 'Clientes',
    bio: 'Clientes',
    image: 'avatar.png',
  };
  customers;

  constructor(private title: Title, private meta: Meta, private customerService: CustomersService) {
  }

  ngOnInit() {
    this.customerService.getAllCustomers()
      .then(customers => {
        this.customers = [];
        customers.forEach(async (customer: any) => {
          this.customers.push( await this.customerService.getClientesWordPressToModel(customer));
        });
      });

    this.title.setTitle(this.data.name);
    this.meta.addTags([
      { name: 'twitter:card', content: 'summary' },
      { name: 'og:url', content: '/Clientes' },
      { name: 'og:title', content: this.data.name },
      { name: 'og:description', content: this.data.bio },
      { name: 'og:image', content: this.data.image },
    ]);
  }

}
