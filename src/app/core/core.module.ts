import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemsCounterService } from './services/counter/items-counter.service';
import { CustomersService } from './services/customers/customers.service';
import { NormalizedUrlService } from './services/normalizedUrl/normalized-url.service';
import { PostService } from './services/post/post.service';
import { ProductService } from './services/product/product.service';
import { ServicesService } from './services/servicios/services.service';
import { EventsService } from './services/events/events.service';
import { UtilsService } from './services/utils.service';
import { PagesService } from './services/pages/pages.service';
import { CategoriesService } from './services/categories/categories.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    ItemsCounterService,
    CustomersService,
    NormalizedUrlService,
    PostService,
    ProductService,
    ServicesService,
    EventsService,
    UtilsService,
    PagesService,
    CategoriesService
  ]
})
export class CoreModule { }
