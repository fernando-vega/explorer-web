import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/core/services/product/product.service';
import { NormalizedUrlService } from 'src/app/core/services/normalizedUrl/normalized-url.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  product;

  constructor(
      private route: ActivatedRoute,
      private productService: ProductService,
      private normalizedUrl: NormalizedUrlService
    ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      const url = this.normalizedUrl.normalizedUrl(params.title);
      this.product = this.productService.getProduct(url);
    });
  }

}
