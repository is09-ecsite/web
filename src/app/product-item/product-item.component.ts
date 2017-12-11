import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';

import { Product } from '../struct/product'
import { ProductService }  from '../service/product.service';


@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  product: Product;
  safeSiteURL: SafeResourceUrl;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.productService.getProduct(id)
      .subscribe(product => {
        this.safeSiteURL = this.sanitizer.bypassSecurityTrustResourceUrl(product.site_url);
        return this.product = product
      });
  }

}
