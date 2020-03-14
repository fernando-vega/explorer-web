import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemsCounterService } from './services/counter/items-counter.service';
import { CustomersService } from './services/customers/customers.service';
import { NormalizedUrlService } from './services/normalizedUrl/normalized-url.service';
import { PostService } from './services/post/post.service';
import { ProductService } from './services/product/product.service';
import { ServiciosService } from './services/servicios/servicios.service';
import { EventsService } from './services/events/events.service';


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
    ServiciosService,
    EventsService
  ]
})
export class CoreModule { }
