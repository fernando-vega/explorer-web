import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { ProductService } from '../../../core/services/product/product.service';

@Component({
  selector: 'app-alquiler',
  templateUrl: './alquiler.component.html',
  styleUrls: ['./alquiler.component.scss'],
})
export class AlquilerComponent implements OnInit {
  data = {
    name: 'Alquiler',
    bio: 'Alquileres',
    image: 'avatar.png',
  };

  status = false;
  products;

  constructor(
    private title: Title,
    private meta: Meta,
    private productsService: ProductService
    ) {}

  ngOnInit() {

    this.products = this.productsService.getAllProducts();

    this.title.setTitle(this.data.name);
    this.meta.addTags([
      { name: 'twitter:card', content: 'summary' },
      { name: 'og:url', content: '/alquiler' },
      { name: 'og:title', content: this.data.name },
      { name: 'og:description', content: this.data.bio },
      { name: 'og:image', content: this.data.image },
    ]);
  }

  open() {
    if (this.status) {
      this.status = false;
    } else {
      this.status = true;
    }
  }
}
