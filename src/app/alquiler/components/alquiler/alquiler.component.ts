import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { ProductService } from '../../../core/services/product/product.service';
import { CategoriesService } from '../../../core/services/categories/categories.service';
import { ICategoryModel } from '../../../core/models/ICategory.model';

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
  categories: ICategoryModel[];
  loadServices = true;

  constructor(
    private title: Title,
    private meta: Meta,
    private productsService: ProductService,
    private categoriesService: CategoriesService,
  ) {
  }

  ngOnInit() {
    this.getProducts(undefined, undefined);
    this.title.setTitle(this.data.name);
    this.meta.addTags([
      { name: 'twitter:card', content: 'summary' },
      { name: 'og:url', content: '/alquiler' },
      { name: 'og:title', content: this.data.name },
      { name: 'og:description', content: this.data.bio },
      { name: 'og:image', content: this.data.image },
    ]);
    this.getCategories();
  }

  getProducts(filterId: number | undefined, available: boolean | undefined) {
    this.loadServices = true;
    this.productsService.getAllProducts()
      .then(value => {
        this.products = [];
        value.forEach(async (product: any) => {
          // tslint:disable-next-line:triple-equals
          if (available && product.disponibilidad == 1) {
            this.products.push(await this.productsService.getProductWordPressToModel(product));
          } else if ((filterId && this.filterByChildren(filterId, product)) || (!filterId && !available)) {
            this.products.push(await this.productsService.getProductWordPressToModel(product));
          }
        });
      }).finally(() => {
      this.loadServices = false;
    });
  }

  filterByChildren(parent: number, product: any): boolean {

    const subcategories = [];

    this.categories.forEach(value => {
      if (value.id === parent) {
        value.subcategories.forEach(subcategory => {
          subcategories.push(subcategory.id);
        });
      } 
    });

    return product.categories.includes(parent) || product.categories.some((element) => {
      return subcategories.includes(element);
    });
  }

  getCategories() {
    this.categoriesService.getAllCategories()
      .then((value: ICategoryModel[]) => {
        this.categories = value;
      });
  }

  open(category: ICategoryModel) {
    category.statusClass = !category.statusClass;
    this.filter(category.id, undefined);
  }

  filter(id: number, available: boolean | undefined) {
    this.getProducts(id, available);
  }
}
